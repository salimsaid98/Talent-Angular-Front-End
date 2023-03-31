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
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/commponent/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Education } from 'src/app/services/Education';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { PersonalInfoComponent } from './pages/commponent/personal-info/personal-info.component';
import { SpecializationComponent } from './pages/commponent/specialization/specialization.component';
import { SkillsComponent } from './pages/commponent/skills/skills.component';
import { WorkExperienceComponent } from './pages/commponent/work-experience/work-experience.component';
import { AccademicQualificationComponent } from './pages/commponent/accademic-qualification/accademic-qualification.component';
import { HomeContentComponent } from './user/home-content/home-content.component';
import { VacanciesComponent } from './user/vacancies/vacancies.component';
import { MyApplicationComponent } from './pages/commponent/my-application/my-application.component';
import { TalentByIdLoginComponent } from './pages/commponent/talent-by-id-login/talent-by-id-login.component';
import { TalentByIdComponent } from './pages/commponent/talent-by-id/talent-by-id.component';
import { TalentDetailsComponent } from './pages/commponent/talent-details/talent-details.component';


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
    ProfileComponent,
    PersonalInfoComponent,
    SpecializationComponent,
    SkillsComponent,
    WorkExperienceComponent,
    AccademicQualificationComponent,
    HomeContentComponent,
    VacanciesComponent,
    MyApplicationComponent,
    TalentByIdLoginComponent,
    TalentByIdComponent,
    TalentDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,MatCardModule,MatDialogModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
