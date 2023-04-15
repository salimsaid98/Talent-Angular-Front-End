import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { TalentService } from 'src/app/services/talent/talent.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})

export class VacanciesComponent {
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
      this.router.navigate(['/login', { id }]);
    });
  }
}

