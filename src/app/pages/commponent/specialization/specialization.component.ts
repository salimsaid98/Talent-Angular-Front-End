import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecializationService } from 'src/app/services/specialization/specialization.service';
import Swal from 'sweetalert2';
export class SpecializatioDetails{
id!:number
specialization_name!:string
user!:number
}
@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.css']
})
export class SpecializationComponent {
  id!: number;
  specializationData:any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['specialization',             'Action'];
  user!:number
  myForm!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fb: FormBuilder,
  private specialization:SpecializationService,
   private route: ActivatedRoute,
   private router: Router) {
    this.myForm = this.fb.group({
      specialization_name: ['',Validators.required],

    });

   }

  ngOnInit(): void {


    const userString = localStorage.getItem('user') || '';
    this.id = this.route.snapshot.params['id'];
    this.user = parseInt(userString, 10);
    this.fetchById();
  }

  fetchById() {
    this.specialization.getspecializationById2(this.user).subscribe(respo => {
      this.specializationData = respo;
      this.dataSource.data =  this.specializationData;
      this.dataSource.paginator = this.paginator;
      console.log(this.specializationData);
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

  delete(id: number) {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: 'You will not be able to recover this spcializatio record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.id = id;
        this.specialization.deletespecialization(this.id).subscribe(respo => {
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
    this.specialization.newspecialization(data).subscribe(
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

