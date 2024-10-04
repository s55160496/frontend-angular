import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { response } from 'express';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss',
})
export class ActivateAccountComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  isSuccess = false;
  private token: any;

  isErrorTokenExpired = false;
  isErrorAccountAlreadyActivated = false;

  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
    if (this.token === null) {
      this.router.navigate(['/login']);
      return;
    }

    this.activateAccount();
  }

  private activateAccount() {
    this.userService.activateAccount(this.token as string).subscribe(
      (response) => {
        console.log(response);
        this.isSuccess = true;
        // this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);
        let code = error.error.error;
        if (code === 'user.activate.already') {
          this.isSuccess = false;
          this.isErrorAccountAlreadyActivated = true;
        } else if (code === 'user.activate.token.expire') {
          this.isSuccess = false;
          this.isErrorTokenExpired = true;
        } else {
          this.isSuccess = false;
        }
        // alert(error.error.error);
      }
    );
  }

  resendActivateEmail() {
    this.userService.resendactivateEmail(this.token as string).subscribe(
      () => {
        // successs
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateTologinPage() {
    this.router.navigate(['/login']);
  }
}
