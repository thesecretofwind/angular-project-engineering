import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigate():void {
    if( this.router.url === '/settings/login' || this.router.url === '/settings') {
      this.router.navigate(['/settings/login1']);
      return;
    }

    this.router.navigate(['/settings/login']);
  }
}
