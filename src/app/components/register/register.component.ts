import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  RegisterFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  constructor(private UserService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.RegisterFormGroup.invalid) {
      return;
    }

    let email = this.RegisterFormGroup.controls.email.value;
    let password = this.RegisterFormGroup.controls.password.value;
    let name = this.RegisterFormGroup.controls.name.value;

    this.UserService.register(email, password, name).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      (error) => {
        alert(error.error.error);
      }
    );
  }
}
