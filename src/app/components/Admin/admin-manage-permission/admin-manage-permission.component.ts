import { Component, NgModule, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-manage-permission',
  templateUrl: './admin-manage-permission.component.html',
  styleUrl: './admin-manage-permission.component.scss'
})

export class AdminManagePermissionComponent implements OnInit {

constructor(private translate: TranslateService){
  this.translate.setDefaultLang('th');
}

  ngOnInit(): void {
      
  }
}


