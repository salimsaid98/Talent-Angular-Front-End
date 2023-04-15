import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TalentService } from 'src/app/services/talent/talent.service';
import { TalentCatService } from 'src/app/services/talentCat/talent-cat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-application',
  templateUrl: './my-application.component.html',
  styleUrls: ['./my-application.component.css']
})
export class MyApplicationComponent {
  id!: number;
  applicationData:any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['status','talent_name','date_applied','Action'];
  user!:number
  myForm!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
  private application:TalentService,
   private route: ActivatedRoute,
   private router: Router) {


   }

  ngOnInit(): void {


    const userString = localStorage.getItem('user') || '';
    this.id = this.route.snapshot.params['id'];
    this.user = parseInt(userString, 10);
    this.fetchById();
  }

  fetchById() {
    this.application.getapplicationStatusById(this.user).subscribe(respo => {
      this.applicationData = respo;
      this.dataSource.data =  this.applicationData;
      this.dataSource.paginator = this.paginator;
      console.log(this.applicationData);
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

  delete(id: number) {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: 'You will not be able to recover this Application record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.id = id;
        this.application.deletetapplication(this.id).subscribe(respo => {
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






}
function subscribe(arg0: (respo: any) => void) {
  throw new Error('Function not implemented.');
}

