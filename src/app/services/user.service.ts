import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginResponse } from '../interfaces/i-login-response';
import { IRegisterResponse } from '../interfaces/i-register-response';
import { IProfileResponse } from '../interfaces/i-profile-response';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient,private cookieService: CookieService) {}

  login(email: string, password: string): Observable<ILoginResponse> {
    let url = 'http://localhost:8080/user/login';
    let body = {
      email: email,
      password: password,
    };

    return this.http.post<ILoginResponse>(url, body);
  }

  register(
    email: string,
    password: string,
    name: string
  ): Observable<IRegisterResponse> {
    let url = 'http://localhost:8080/user/register';
    let body = {
      email: email,
      password: password,
      name: name,
    };

    return this.http.post<IRegisterResponse>(url, body);
  }

  activateAccount(token: string): Observable<any> {
    let url = 'http://localhost:8080/user/activate';
    let body = {
      token: token,
    };
    return this.http.post<any>(url,body);
  }

  resendactivateEmail(token: string): Observable<any> {
    let url = 'http://localhost:8080/user/resend-activation-email';
    let body = {
      token: token,
    };
    return this.http.post<any>(url,body);
  }

  getProfile(): Observable<IProfileResponse> {
    let url = 'http://localhost:8080/user/profile';
    
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${btoa(this.cookieService.get("ACCESS_TOKEN"))}`)
    }

    return this.http.get<IProfileResponse>(url,header);
  }
}
