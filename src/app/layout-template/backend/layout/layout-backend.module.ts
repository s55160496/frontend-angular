import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminManageUserComponent } from '../../../components/Admin/admin-manage-user/admin-manage-user.component';
import { AdminManagePermissionComponent } from '../../../components/Admin/admin-manage-permission/admin-manage-permission.component';
import { RouterModule } from '@angular/router';
import { LayoutBackendRoutingModule } from './layout-backend-routing.module';
import { SharedBackendModule } from '../../shared/backend/shared/shared-backend.module';
import { LayoutComponent } from './layout.component';



@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    SharedBackendModule,
    LayoutBackendRoutingModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,// Add this line
  declarations: [AdminManageUserComponent,AdminManagePermissionComponent,LayoutComponent]
})
export class LayoutBackendModule { }
