import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/default/navbar/navbar.component';
import { SidebarComponent } from './pages/default/sidebar/sidebar.component';
import { FooterComponent } from './pages/default/footer/footer.component';
import { DashboardComponent } from './pages/commponent/dashboard/dashboard.component';
import { TalentsComponent } from './pages/commponent/talents/talents.component';
import { CvComponent } from './pages/commponent/cv/cv.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './pages/commponent/login/login.component';
import { RegisterComponent } from './pages/commponent/register/register.component';
import { LogRefNavComponent } from './pages/commponent/log-ref-nav/log-ref-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TalentsComponent,
    CvComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogRefNavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
