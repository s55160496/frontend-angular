import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TranslateService } from '@ngx-translate/core';
import {  NavigationEnd, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  
  @ViewChild('sidebar') sidebar?: SidebarComponent;
  public pushRightClass: string;

  constructor(private translate: TranslateService, public router: Router,private UserService:UserService) {
    this.translate.setDefaultLang('th');
    this.translate.use('th');
    
    this.router.events.subscribe(val => {
      if (
          val instanceof NavigationEnd &&
          window.innerWidth <= 992 &&
          this.isToggled()
      ) {
          this.toggleSidebar();
      }
  });
}
  
  ngOnInit(): void {
    this.pushRightClass = 'push-right';

    this.UserService.getProfile().subscribe(
      (response) => {
       // this.router.navigate(['/configUser']);
        console.log(response);
      },
      (error) => {
        console.log(error);
      //alert(error.error.error);
      }
    );
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('payweb3_initiate');
    localStorage.removeItem('PAY_REQUEST_ID');
    localStorage.removeItem("PAY_REQUEST_ID_WEB");
    localStorage.removeItem("PAY_GATE_ID_WEB");
    localStorage.removeItem("REFERENCE_WEB");
    localStorage.removeItem("ENCRYPTION_KEY_WEB");
}

isToggled(): boolean {
  const dom = document.querySelector('body') as HTMLElement;
  return dom.classList.contains(this.pushRightClass);
}

toggleSidebar() {
  const dom = document.querySelector('body') as HTMLElement;
  dom.classList.toggle(this.pushRightClass);
  console.log(dom);
  console.log(dom.classList);
  console.log("pushRightClass : " + this.pushRightClass);
  console.log("isToggled :" + this.isToggled);
}

rltAndLtr() {
  const dom = document.querySelector('body')as HTMLElement;
  dom.classList.toggle('rtl');
}
changeLang(language: string) {
    this.translate.use(language);
}


}
