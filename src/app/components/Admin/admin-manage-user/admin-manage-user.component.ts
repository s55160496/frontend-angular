import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-manage-user',
  templateUrl: './admin-manage-user.component.html',
  styleUrl: './admin-manage-user.component.scss'
})
export class AdminManageUserComponent implements OnInit {

  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('th');
  }
  ngOnInit(): void {
      
  }
}
