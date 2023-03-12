import { RegisterServicesService } from './../../../services/register-services.service';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formSubmissionSucceeded: boolean =false;
  User =     { id:0,
                        username: '',
                         email: '',
                         password:''
                        };

  constructor(private UserService: RegisterServicesService) {}

  onSubmit() {
    this.UserService.createUser(this.User).subscribe(response => {
      console.log('User created:', response);
      // Reset the form

     console.log(this.User)
    this. User =     { id:0,
                                username: '',
                                email: '',
                                password:''
                                };
     this.formSubmissionSucceeded=true
     if (this.formSubmissionSucceeded=true) {
      // Show success message
      Swal.fire({
        title: 'Success!',
        text: 'Your form has been submitted successfully.',
        icon: 'success'
      });
    }
    },
    _error=>{
      this.formSubmissionSucceeded = false

        // Show success message
        Swal.fire({
          title: 'Error!',
          text: 'There was an error submitting your form.',
          icon: 'error'
        });

    });
  }

}

