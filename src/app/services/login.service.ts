import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Observer,Subject,from ,BehaviorSubject} from 'rxjs';

const source = from([2,3,4])

const subject = new Subject();

subject.subscribe({
  next: x => console.log(x)
})
subject.next('hello world')

const behaviorSubject = new BehaviorSubject(10);
behaviorSubject.subscribe(x => console.log(x))
behaviorSubject.next(11)
behaviorSubject.next(12)
behaviorSubject.subscribe(x => console.log(x))
behaviorSubject.next(13)

const a = new Observable<any>(observer => observer.next(2));
a.subscribe((x:number) => console.log(x))
// a.next(1)
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  public login(usercode: string, password: string):Observable<any>{
    return this.http.post<string>('/api/login', {
      usercode,
      password
    })
  }
}
