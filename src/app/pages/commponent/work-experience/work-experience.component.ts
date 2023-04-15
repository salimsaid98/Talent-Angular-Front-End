import { WorkExperienceService } from './../../../services/work-experience/work-experience.service';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  id!: number;
  work_experiencenData:any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['company_name','job_tittle','suppervisor_name','suppervisor_phone','Action'];
  user!:number
  myForm!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fb: FormBuilder,
  private work_experiencen:WorkExperienceService,
   private route: ActivatedRoute,
   private router: Router) {
    this.myForm = this.fb.group({
      company_name: ['',Validators.required],
      job_tittle: ['',Validators.required],
      suppervisor_name: ['',Validators.required],
      suppervisor_phone: ['',Validators.required],
      wend_date: ['',Validators.required],
      wstart_date: ['',Validators.required],

    });

   }

  ngOnInit(): void {


    const userString = localStorage.getItem('user') || '';
    this.id = this.route.snapshot.params['id'];
    this.user = parseInt(userString, 10);
    this.fetchById();
  }

  fetchById() {
    this.work_experiencen.getwork_experiencenById2(this.user).subscribe(respo => {
      this.work_experiencenData = respo;
      this.dataSource.data =  this.work_experiencenData;
      this.dataSource.paginator = this.paginator;
      console.log(this.work_experiencenData);
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
        this.work_experiencen.deletework_experiencen(this.id).subscribe(respo => {
          console.log(respo);
          Swal.fire(
            'Deleted!',
            'Your work experience record has been deleted.',
            'success'
          );
          this.fetchById();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your  work experience record is safe :)',
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
    this.work_experiencen.newwork_experiencen(data).subscribe(
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
