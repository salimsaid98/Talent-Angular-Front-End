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

const routes: Routes = [
{
  path:'home',component:HomeComponent,children:[
    {
      path:'',component:DashboardComponent
    },
    {
      path:'profile',component:ProfileComponent
    },
    {
      path:'talents',component:TalentsComponent
    },
  {
    path:'cv',component:CvComponent
  }
  ]
},
{
  path:'',component:LogRefNavComponent,children:[
    {
      path:'',component:LoginComponent
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
