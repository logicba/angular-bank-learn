import { UsersComponent } from './pages/backend/users/users.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenLayoutComponent } from './layouts/authen-layout/authen-layout.component';

import { ContactComponent } from './pages/frontend/contact/contact.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';



const routes: Routes = [
  //Route สำหรับเรียกหน้า Frontend Layout
  {
    path: "",
    component: FrontendLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "contact",
        component: ContactComponent
      }
    ]
  },
  // เพิ่มหน้าสำหรับ login
  {
    path: 'auth',
    component: AuthenLayoutComponent,
    children: [
      // {
      //   path: "",
      //   //component: LoginComponent
      //   component: LoginComponent
      // },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "login",
        component: LoginComponent
      }

    ]
  },//// route for call backend page
  {
    path: 'backend',
    component: BackendLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "stock",
        component: StockComponent
      },
      {
        path: "users",
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
