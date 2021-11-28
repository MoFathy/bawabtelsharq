import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/User';
import { BASE_URL, handleError } from '../shared/shared';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user?: User;
  obj: any;
  lang?: string;

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  options2 = {};
  constructor(private http: HttpClient,
    // public translateService: TranslateService
    ) { 
    // this.lang = translateService.currentLang;
    this.lang = 'en';
  }

  // Login Service
  login(data: any) : Observable<any>{
    let options = this.options;
    return this.http.post<User>(BASE_URL + 'login', data, options).pipe(
      catchError(handleError)
    );
  }
  // Register Service
  register(data: any) : Observable<any> {
    let options = this.options;
    return this.http.post(BASE_URL + 'register', data, options).pipe(
      catchError(handleError)
    );
  }

  maylike() : Observable<any> {
    return this.http.get(BASE_URL + 'may_like&lang=en&currency_id=4').pipe(
      catchError(handleError)
    );
  }
  updateAccount(data: any) : Observable<any> {
    let options = this.options2;
    return this.http.post<User>(BASE_URL + 'update_account', data, options).pipe(
      catchError(handleError)
    );
  }
  changepassword(data: any) : Observable<any> {
    let options = this.options;
    return this.http.post(BASE_URL + 'change_password', data, options).pipe(
      catchError(handleError)
    );
  }

  isLogin() : boolean{
    let user = localStorage.getItem('user');
    if(!user || user === undefined || user === '' || user === null) return false;
    return true;
  }

  logout() : Observable<any> {
    let options = this.options;
    this.obj = localStorage.getItem('user');
    this.user = JSON.parse(this.obj);
    let data = 'user_id=' + this.user?.user_id + '&ApiKey=' + this.user?.ApiKey;
    return this.http.post(BASE_URL + 'logout', data, options).pipe(
      catchError(handleError)
    );
  }

}
