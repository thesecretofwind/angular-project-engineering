import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formError: string = '';
  formData: FormGroup = this.formBuilder.group({
    UserCode: ['', Validators.required],
    Password: ['', Validators.required]
  })
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
  }

  async formSubmit(): Promise<void>{

    if(!this.formData.valid) {
      // return false;
      alert('xxx')
    }

    const { UserCode, Password} = this.formData.value;
    try {
      const res = await this.loginService.login(UserCode, Password);
      res.subscribe(data => console.log(data))
      console.log(res);
      if(res) {
        this.router.navigate(['/settings'])
      }
    } catch(xhr) {
      const error = xhr as HttpErrorResponse;
      this.formError = error.status === 500 ? error.message : error.error
    }
  }

}
