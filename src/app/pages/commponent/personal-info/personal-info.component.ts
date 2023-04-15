import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalDetails } from 'src/app/services/Personal_Details';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { PersonalInfoService } from 'src/app/services/personal_info/personal-info.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})

export class PersonalInfoComponent implements OnInit {
  personalForm: FormGroup;
  personal_info:PersonalDetails = new PersonalDetails()
  user!: number;
  hasPersonalInfo: boolean = false;
  id!: number;
  constructor(
    private fb: FormBuilder,
    private personalInfo: PersonalInfoService, private route: ActivatedRoute,private router: Router
  ) {
    this.personalForm = this.fb.group({
      first_name: ['', Validators.required],
      second_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }

  ngOnInit() {
    const userString = localStorage.getItem('user') || '';
    this.user = parseInt(userString, 10);
    this.getbyid();
  }

  createPersnal_info() {
    const data = {
      ...this.personalForm.value,
      user: this.user
    };
    this.personalInfo.newperisonal_info(data).subscribe(respo => {
      console.log(respo);
      this.hasPersonalInfo = true;
    });
  }

  onSubmit() {
    this.createPersnal_info();
  }

  getbyid() {
    this.personalInfo.getpersonal_infoById(this.user).subscribe(respo => {
      this.personal_info = respo;
      console.log(this.personal_info);

      this.hasPersonalInfo = true;
    }, error => {
      console.log(error);
      this.hasPersonalInfo = false;
    });
  }

  edit(id:number){
    this.id = id;
    this.personalInfo.getpersonal_infoById(this.id)
      this.router.navigate(['/home/edit-personal_info/', { id }]);
  }

}


