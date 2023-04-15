import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalDetails } from 'src/app/services/Personal_Details';
import { PersonalInfoService } from 'src/app/services/personal_info/personal-info.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-personal-info',
  templateUrl: './edit-personal-info.component.html',
  styleUrls: ['./edit-personal-info.component.css']
})
export class EditPersonalInfoComponent {
  personalForm: FormGroup;
  personal_info:PersonalDetails = new PersonalDetails()
  user!: number;
  hasPersonalInfo: boolean = false;
  id!:number

  constructor(
    private fb: FormBuilder,
    private personalInfo: PersonalInfoService,
    private route :ActivatedRoute,
    private router :Router
  ) {
    this.personalForm = this.fb.group({
      first_name: ['', Validators.required],
      second_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }

  ngOnInit() {
    const userString = localStorage.getItem('user') || '';
    this.id = this.route.snapshot.params['id'];
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

  getbyid() {
    this.personalInfo.getpersonal_infoById(this.user).subscribe(respo => {
      this.personal_info = respo;
      console.log(this.personal_info);
      this.personalForm = this.fb.group({
        first_name: new FormControl(this.personal_info.first_name),
        second_name:new FormControl(this.personal_info.second_name),
        last_name:new FormControl(this.personal_info.last_name),
        // email:new FormControl(this.personal_info.ema),
        address: new FormControl(this.personal_info.address),
        phone: new FormControl(this.personal_info.phone),
        gender: new FormControl(this.personal_info.gender),
        dob:new FormControl(this.personal_info.dob),
      });
      this.hasPersonalInfo = true;
    }, error => {
      console.log(error);
      this.hasPersonalInfo = false;
    });
  }

  updatePersonal_info() {
    this.personalInfo.updateperisonal_info(this.personal_info.id, this.personalForm.value).subscribe(
      respo => {
        console.log(respo);
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: 'updated successfully',
          toast: true,
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
          width: '350px',
          background: '#2ecc71'
        });
      },
      error => {
        console.log(error);
        Swal.fire({
          position: 'top-right',
          icon: 'error',
          title: ' personal information',
          toast: true,
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
          width: '350px',
          background: '#e74c3c'
        });
      }
    );
  }



  onSubmit() {
   console.log(this.personalForm.value)
   this.updatePersonal_info();
   this.personalForm.reset()
   this.router.navigate(['/home/personal_info/'])
  }
}
