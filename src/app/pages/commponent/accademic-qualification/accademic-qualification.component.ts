import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AcademicQualificationService } from './../../../services/academic-qualification/academic-qualification.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/services/Education';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accademic-qualification',
  templateUrl: './accademic-qualification.component.html',
  styleUrls: ['./accademic-qualification.component.css']
})
export class AccademicQualificationComponent {
  id!: number;
  academicData:any;
  academicData2:Education = new Education();
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['Level', 'Program','Institution', 'Action'];
  user!:number
  myForm!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fb: FormBuilder,private academic:AcademicQualificationService, private route: ActivatedRoute, private router: Router) {
    this.myForm = this.fb.group({
      education_level: ['',Validators.required], // replace '' with a default value if you have one
      institution: ['',Validators.required],
      program: ['',Validators.required],
      estart_date: ['',Validators.required],
      eend_date: ['',Validators.required]

    });

   }

  ngOnInit(): void {


    const userString = localStorage.getItem('user') || '';
    this.id = this.route.snapshot.params['id'];
    this.user = parseInt(userString, 10);
    this.fetchById();
  }

  fetchById() {
    this.academic.getacademicById2(this.user).subscribe(respo => {
      this.academicData = respo;
      this.dataSource.data =  this.academicData;
      this.dataSource.paginator = this.paginator;
      console.log(this.academicData);
    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  view(id: number) {
    this.router.navigate(['/home/view-accademic-qualification/',{id}])
  }
  edit(id: number) {;
    this.id = id
    this.router.navigate(['/home/view-accademic-qualification/',{id}])
    // this.getById();

  }
  // getById(){
  //   this.academic.getacademicById2(this.id).subscribe(respo => {
  //     this.academicData2 = respo;
  //     console.log(this.academicData2);
  //     this.myForm = this.fb.group({
  //       education_level:new FormGroup(this.academicData2.education_level), // replace '' with a default value if you have one
  //       institution:new FormGroup(this.academicData2.institution),
  //       program: new FormGroup(this.academicData2.program),
  //       estart_date: new FormGroup(this.academicData2.estart_date),
  //       eend_date: new FormGroup(this.academicData2.eend_date),
  //   });

  //   }, error => {
  //     console.log(error);

  //   });
  // }
  delete(id: number) {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: 'You will not be able to recover this academic record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.id = id;
        this.academic.deleteacademic(this.id).subscribe(respo => {
          console.log(respo);
          Swal.fire(
            'Deleted!',
            'Your academic record has been deleted.',
            'success'
          );
          this.fetchById();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your academic record is safe :)',
          'error'
        );
      }
    });
  }

  create() {
    const data = {
      ...this.myForm.value,
      user: this.user
    };
    this.academic.newacademic(data).subscribe(
      respo => {
        console.log(respo);
        this.fetchById();
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: 'Record created successfully',
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
          title: 'Failed to create record',
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


submit(){
this.create()
this.myForm.reset()

}


}
function subscribe(arg0: (respo: any) => void) {
  throw new Error('Function not implemented.');
}

