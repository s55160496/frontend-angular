import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(private translate: TranslateService, public router: Router) {
    this.router.events.subscribe(val => {
        if (this.isToggled()) {
            this.toggleSidebar();
        }
    });
}

  ngOnInit(): void {
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = '';
    this.pushRightClass = 'push-right';
  }

  eventCalled() {
    this.isActive = !this.isActive;
}

addExpandClass(element: any) {
    if (element === this.showMenu) {
        this.showMenu = '0';
    } else {
        this.showMenu = element;
    }
}

toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
}

isToggled(): boolean {
    return true
}

toggleSidebar() {
}

rltAndLtr() {

}

changeLang(language: string) {
   // this.translate.use(language);
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
}
