import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TalentService } from 'src/app/services/talent/talent.service';
import { TalentCatService } from 'src/app/services/talentCat/talent-cat.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-talent-by-id-login',
  templateUrl: './talent-by-id-login.component.html',
  styleUrls: ['./talent-by-id-login.component.css']
})
export class TalentByIdLoginComponent {
  id!:number
  talents!:any[]
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['talent_name', 'company_name', 'closing_date', 'view'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
 constructor(private talentcat:TalentCatService,private route :ActivatedRoute,private router:Router,private talent : TalentService){}

 ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.fetchById();

 }

 fetchById(){
  this.talentcat.gettalentCatById(this.id).subscribe(respo=>{
    this.talents=respo
    this.dataSource.data = this.talents;
    this.dataSource.paginator = this.paginator;
    console.log(respo)
  })
 }
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

 view(id:number){
  this.id = id
  this.talent.gettalentById(id).subscribe(respo=>{
    console.log(id)
    this.router.navigate(['/login',{id}])
  })
 }
}
