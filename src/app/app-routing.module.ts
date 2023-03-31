import { TalentDetailsComponent } from './pages/commponent/talent-details/talent-details.component';
import { TalentByIdLoginComponent } from './pages/commponent/talent-by-id-login/talent-by-id-login.component';
import { WorkExperienceComponent } from './pages/commponent/work-experience/work-experience.component';
import { SpecializationComponent } from './pages/commponent/specialization/specialization.component';
import { AccademicQualificationComponent } from './pages/commponent/accademic-qualification/accademic-qualification.component';
import { PersonalInfoComponent } from './pages/commponent/personal-info/personal-info.component';
import { VacanciesComponent } from './user/vacancies/vacancies.component';
import { RegisterComponent } from './pages/commponent/register/register.component';
import { LogRefNavComponent } from './pages/commponent/log-ref-nav/log-ref-nav.component';
import { LoginComponent } from './pages/commponent/login/login.component';
import { HomeComponent } from './user/home/home.component';
import { CvComponent } from './pages/commponent/cv/cv.component';
import { TalentsComponent } from './pages/commponent/talents/talents.component';

import { DashboardComponent } from './pages/commponent/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/commponent/profile/profile.component';
import { HomeContentComponent } from './user/home-content/home-content.component';
import { SkillsComponent } from './pages/commponent/skills/skills.component';
import { MyApplicationComponent } from './pages/commponent/my-application/my-application.component';

const routes: Routes = [
{
  path:'home',component:HomeComponent,children:[
    {
      path:'',component:DashboardComponent
    },
    {
      path:'personal_info',component:PersonalInfoComponent
    },
    {
      path:'academic',component:AccademicQualificationComponent
    },
    {
      path:'special',component:SpecializationComponent
    },
    {
      path:'work',component:WorkExperienceComponent
    },
    {
      path:'skill',component:SkillsComponent
    },
    {
      path:'cv',component:CvComponent
    },
    {
      path:'talent',component:TalentsComponent
    },
    {
      path:'my_application',component:MyApplicationComponent
    },
    {
      path:'talent_details',component:TalentDetailsComponent
    },
  {
    path:'cv',component:CvComponent
  }
  ]
},
{
  path:'',component:LogRefNavComponent,children:[
    {
      path:'',component:HomeContentComponent
    },
    {
      path:'vacance',component:VacanciesComponent
    },
    {
      path:'login',component:LoginComponent
    },
    {
      path:'talent_login_id',component:TalentByIdLoginComponent
    },
    {
      path:'register',component:RegisterComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
