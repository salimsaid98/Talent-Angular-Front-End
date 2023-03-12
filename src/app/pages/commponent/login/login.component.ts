import { Router, Routes } from '@angular/router';
import { AuthServiceService } from './../../../services/auth-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  errorMessage!: string;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private routers:Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required,]],
      password: ['', Validators.required]
    });
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
