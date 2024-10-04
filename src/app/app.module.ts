import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CookieService } from 'ngx-cookie-service';

import { AuthInterceptorService } from './services/auth-interceptor.service';
import { HomeComponent } from './components/home/home.component';

import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { LayoutBackendModule } from './layout-template/backend/layout/layout-backend.module';
import { SharedBackendModule } from './layout-template/shared/backend/shared/shared-backend.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AdminManageUserComponent } from './components/Admin/admin-manage-user/admin-manage-user.component';
import { LayoutFrontendComponent } from './layout-template/frontend/layout-frontend/layout-frontend.component';
import { LayoutFrontendModule } from './layout-template/frontend/layout-frontend/layout-frontend.module';

// Function for loading translation files
export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http);
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    ActivateAccountComponent,
    LayoutFrontendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutBackendModule,
    SharedBackendModule,
    TranslateModule.forRoot({
      defaultLanguage:"th",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    LayoutFrontendModule
    
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
  
})

export class AppModule {}
