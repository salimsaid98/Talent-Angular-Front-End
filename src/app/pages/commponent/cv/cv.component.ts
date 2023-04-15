import { WorkExperienceService } from './../../../services/work-experience/work-experience.service';
import { AcademicQualificationService } from './../../../services/academic-qualification/academic-qualification.service';
import { Component } from '@angular/core';
import { PersonalDetails } from 'src/app/services/Personal_Details';
import { PersonalInfoService } from 'src/app/services/personal_info/personal-info.service';
import { SkillsService } from 'src/app/services/skills/skills.service';
import { SpecializationService } from 'src/app/services/specialization/specialization.service';
export class Education{
  id!:number
  education_level!:string
  institution!:string
  program!:string
  estart_date!:Date
  eend_date!:Date
  user!:number
}

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  personal_info: PersonalDetails=new PersonalDetails();
  education :any
  work_exp:any
  skills:any
  specialization:any
  user!:number
  constructor(private personalInfo: PersonalInfoService,
   private  educationservices:AcademicQualificationService,
   private work_exp_serv:WorkExperienceService,
   private skill_serv:SkillsService,
   private special_serv :SpecializationService) { }

  ngOnInit(): void {
    const userString = localStorage.getItem('user') || '';
    this.user = parseInt(userString, 10);
    this.getPersonal_info();
    this.getPersonal_academic() ;
    this.getPersonal_work_Exp();
    this.getPersonal_skills();
    this.getPersonal_specialization();
    }


  getPersonal_info() {
    this.personalInfo.getpersonal_infoById(this.user).subscribe(respo => {
      this.personal_info = respo;
      console.log(this.personal_info);


    }, error => {
      console.log(error);

    });
  }
  getPersonal_academic() {
    this.educationservices.getacademicById2(this.user).subscribe(respo => {
      this.education = respo;
      console.log(this.education);


    }, error => {
      console.log(error);

    });
  }
  getPersonal_work_Exp() {
    this.work_exp_serv.getwork_experiencenById2(this.user).subscribe(respo => {
      this.work_exp= respo;
      console.log(this.work_exp);


    }, error => {
      console.log(error);

    });
  }

  getPersonal_skills() {
    this.skill_serv.getskillById2(this.user).subscribe(respo => {
      this.skills= respo;
      console.log(this.skills);


    }, error => {
      console.log(error);

    });
  }
  getPersonal_specialization() {
    this.special_serv.getspecializationById2(this.user).subscribe(respo => {
      this.specialization= respo;
      console.log(this.specialization);


    }, error => {
      console.log(error);

    });
  }
}
