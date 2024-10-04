import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AppCookieService } from '../../services/app-cookie.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  LoginFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private UserService: UserService,
    private appCokkieService: AppCookieService,
    private router : Router,
    private translate : TranslateService
  ) {
    this.translate.setDefaultLang('th');
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.LoginFormGroup.invalid) {
      return;
    }

    let email = this.LoginFormGroup.controls.email.value;
    let password = this.LoginFormGroup.controls.password.value;
    this.UserService.login(email, password).subscribe(
      (response) => {
        this.appCokkieService.setAccessToken(response.token);
        this.router.navigate(['/home']);
        localStorage.setItem("isLoggedin",response.token);
      },
      (error) => {
      alert(error.error.error);
      }
    );
    console.log(email, password);
  }
}
