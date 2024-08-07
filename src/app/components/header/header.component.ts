import { Component, OnInit } from '@angular/core';
import { AppCookieService } from '../../services/app-cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private AppCookieService: AppCookieService,
    private router : Router
  ) {}

  ngOnInit(): void {}

  doLogout() {
    this.AppCookieService.deleteAccessToken();
    this.router.navigate(['/dashboard'])
  }
}
