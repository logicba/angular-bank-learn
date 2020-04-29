import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { AuthenLayoutComponent } from './layouts/authen-layout/authen-layout.component';
import { HeaderFrontComponent } from './shared/frontend/header-front/header-front.component';
import { FooterFrontComponent } from './shared/frontend/footer-front/footer-front.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

// Add from module
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { UsersComponent } from './pages/backend/users/users.component';
import { BackendNavbarComponent } from './shared/backend/backend-navbar/backend-navbar.component';
import { BackendSidebarComponent } from './shared/backend/backend-sidebar/backend-sidebar.component'

/// chart js
import { ChartModule } from 'angular2-chartjs'

//Add route gurad สำหรับ ป้องการ บ้าง url ที่เราต้องการ ควบคุม
import { AuthService } from './service/auth.service'
import { AuthGuard } from './auth/auth.guard'

/// Http module เป็น โมดูลที่เอาไว้เรียก api
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FrontendLayoutComponent,
    BackendLayoutComponent,
    AuthenLayoutComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    StockComponent,
    UsersComponent,
    BackendNavbarComponent,
    BackendSidebarComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartModule,
    HttpClientModule

  ],
  providers: [ // พวก service กับ guard ใส่ไว้ในนี 
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
