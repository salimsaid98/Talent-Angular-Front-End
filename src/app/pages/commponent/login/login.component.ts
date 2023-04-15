import { ActivatedRoute, Router, Routes } from '@angular/router';
import { AuthServiceService } from './../../../services/auth-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TalentService } from 'src/app/services/talent/talent.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  id!:number
  talents!:any[]
  loginForm!: FormGroup;
  errorMessage!: string;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private routers:Router,private route :ActivatedRoute,private talent : TalentService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required,]],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchById();

   }

   fetchById(){
    this.talent.gettalentById(this.id).subscribe(respo=>{
      this.talents=respo
      console.log(respo)
    })
   }
  onSubmit(): void {
    this.loading = true;
    console.log(this.loading)
    const credentials = this.loginForm.value;
    this.authService.login(credentials)
      .subscribe(
        () => {
          // Login successful, redirect to homepage
          this.loading = false;
          console.log(localStorage)
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'You have been logged in.'
          });
          this.routers.navigate(['/home']);
        },
        error => {
          this.errorMessage = error.message;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "invalid credential"
          });
        }
      );
  }
}
