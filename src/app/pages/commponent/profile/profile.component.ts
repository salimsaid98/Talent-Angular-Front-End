import { Observable } from 'rxjs';
import { PersonalDetailsService } from './../../../services/personal-details.service';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { PersonalDetails } from 'src/app/services/Personal_Details';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Education } from 'src/app/services/Education';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
personalData:boolean = false
data!:any
check:boolean=false
check2:boolean=true
personal_inf!:any;
education:any
userId!:number
emailFormControl = new FormControl('', [Validators.required, Validators.email]);
skills!: any[];


constructor(private personal_info:PersonalDetailsService,private http: HttpClient,public dialog:MatDialog){

}
ngOnInit() {

 this.getPersonal_info()
 this.getEducation()
}
// parseInt(localStorage.getItem('user') || '0', 10)

getPersonal_info(){

  this.personal_info.getUser_info(parseInt(localStorage.getItem('user') || '0', 10)).subscribe(response=>{
    this.personal_inf = response
    console.log(this.personal_inf)

    this.check = false
    this.check2 = true
  },error=>{
    this.check=true
    this.check2 =false
  }


  )
}
getEducation(){
  this.personal_info.get_user_Education(parseInt(localStorage.getItem('user') || '0', 10)).subscribe(respo =>{
    this.education = respo
    console.log(this.education)
  })
}

add_Personal_info_form:FormGroup = new FormGroup({
  id:new FormControl("0",[Validators.required]),
  first_name:new FormControl("",[Validators.required]),
  second_name:new FormControl("",[Validators.required]),
  last_name:new FormControl("",[Validators.required]),
  gender:new FormControl("",[Validators.required]),
  phone:new FormControl("",[Validators.required]),
  dob:new FormControl("",[Validators.required]),
  address:new FormControl("",[Validators.required]),
  image:new FormControl("",[Validators.required]),
  user:new FormControl(parseInt(localStorage.getItem('user') || '0', 10),[Validators.required]),

});
savePersonal_info()
{
  this,this.personal_info.createPersonal_info(this.add_Personal_info_form.value).subscribe(respo=>{
    alert("success")
    this.getPersonal_info();
  },error=>{
    alert("error")
  }
  )
}
submit(){

console.log(this.add_Personal_info_form)
this.savePersonal_info();
this.add_Personal_info_form.reset()
}

onInputChange(value: string): void {
  const url = `https://api.apilayer.com/skills?q=${value}`;
  const headers = new HttpHeaders({ apikey: 'YvH9KyrgzHGD1WxSQ0iKYlgH1q8Fh2Gb' });
  this.http.get(url, { headers }).subscribe((data: any) => {
    this.skills = data
    console.log(this.skills)
  });
}
  @ViewChild('addeducation')
  addeducation!: TemplateRef<any>;
  openAddEducatio() {
  this.dialog.open(this.addeducation);
}
@ViewChild('addtalent')
  addtalent!: TemplateRef<any>;
openAddTalent(){
  this.dialog.open(this.addtalent,{width:'450px'});
}

}



