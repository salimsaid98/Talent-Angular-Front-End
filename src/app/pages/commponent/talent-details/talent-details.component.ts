import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TalentService } from 'src/app/services/talent/talent.service';
import Swal from 'sweetalert2';
export class Talent{
  id!: number
  talent_name!: string
  talentCategories!: number
  company_name!:string
  closig_date!: Date
  duties_and_respo!: String
  qualification!: string
  employer!: number
}
@Component({
  selector: 'app-talent-details',
  templateUrl: './talent-details.component.html',
  styleUrls: ['./talent-details.component.css']
})
export class TalentDetailsComponent {
  id!: number;
  myForm!: FormGroup;
  talents: Talent = new Talent();
  user!: number;
  cv_status!: any;
  isApplied: boolean = false;

  constructor(private talent: TalentService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      talent: [this.talents.id, Validators.required],
      employer: [this.talents.employer, Validators.required],
      status: ['applied', Validators.required]
    });
  }

  ngOnInit(): void {
    const userString = localStorage.getItem('user') || '';
    this.user = parseInt(userString, 10);
    this.id = this.route.snapshot.params['id'];
    this.fetchById();
    this.getcv();
    this.apply();
  }

  ngOnDestroy() {
    this.id = 0;
  }

  fetchById() {
    this.talent.gettalentById(this.id).subscribe(respo => {
      console.log(respo)
      this.talents = respo
      this.myForm.patchValue({
        talent: this.talents.id,
        employer: this.talents.employer
      });
    });
  }

  getcv() {
    this.talent.getCv(this.user).subscribe(respo => {
      this.cv_status = respo.cv_status; // set cv_status value
      console.log(respo);
    });
  }

  createApplication() {
    const data = {
      ...this.myForm.value,
      user: this.user
    };
    this.talent.createApplication(data).subscribe(respo => {
      console.log(respo);
      this.isApplied = true;
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        title: 'Application created successfully!',
        toast: true,
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
        width: '350px',
        background: '#2ecc71'
      });
    });
  }

  submit() {
    this.createApplication();
  }

  apply() {
    this.talent.getapplicationById(this.user).subscribe(respo => {
      for (let i = 0; i < respo.length; i++) {
        // console.log(respo[i].id);
        if(respo[i].talent_id==this.id){
          this.isApplied = true
        }
      }
    });
  }


}




