import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManageUserComponent } from '../../../components/Admin/admin-manage-user/admin-manage-user.component';
import { AdminManagePermissionComponent } from '../../../components/Admin/admin-manage-permission/admin-manage-permission.component';
import { LayoutFrontendComponent } from './layout-frontend.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutFrontendComponent,
    children: [
      {
        path: 'configUser',
        component: AdminManageUserComponent,
      },
      {
        path: 'contact',
        component: AdminManagePermissionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LayoutBackendRoutingModule  { }
