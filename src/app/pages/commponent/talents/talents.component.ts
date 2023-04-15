import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TalentService } from 'src/app/services/talent/talent.service';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent {
  id!: number;
  talents!: any[];
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['talent_name', 'company_name', 'closing_date', 'view'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private talent: TalentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchAll();
  }

  fetchAll() {
    this.talent.gettalent().subscribe(respo => {
      this.talents = respo;
      this.dataSource.data = this.talents;
      this.dataSource.paginator = this.paginator;
      console.log(this.talents);
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
    this.id = id;
    this.talent.gettalentById(id).subscribe(respo => {
      console.log(id);
      this.router.navigate(['/home/talent_details/', { id }]);
    });
  }
}
