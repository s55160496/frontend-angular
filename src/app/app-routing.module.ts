import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChatComponent } from './components/chat/chat.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout-template/backend/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
        { path: 'dashboard',
           component:DashboardComponent },
        // { path: 'payweb3', loadChildren: () => import('./payweb3/payweb3.module').then(m => m.Payweb3Module) },
        // { path: 'cardpayment', loadChildren: () => import('./payhost-card-payment/payhost-card-payment.module').then(m => m.PayhostCardPaymentModule) },
        // { path: 'webpayment', loadChildren: () => import('./payhost-web-payment/payhost-web-payment.module').then(m => m.PayhostWebPaymentModule) },
        // { path: 'result', loadChildren: () => import('./result/result.module').then(m => m.ResultModule) },
    ]
}



  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //  // canActivate :[AuthGuardService]
  // },
  // {
  //   path: 'chat',
  //   component: ChatComponent,
  //   //canActivate :[AuthGuardService]
  // }, 
  // // {
  // //   path: '',
  // //   component: HomeComponent,
  // //  // canActivate :[AuthGuardService]
  // // },
  // {
  //   path: 'activate/:token',
  //   component: ActivateAccountComponent,
  //  // canActivate :[AuthGuardService]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
