import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TalentCatService } from 'src/app/services/talentCat/talent-cat.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent {
  talentscat!:any[]
  constructor(private talentcatServices: TalentCatService,private router :Router){}

  ngOnInit(): void {
  this.fetcht()
  }

  fetcht(){
    this.talentcatServices.gettalentCat().subscribe(respo=>{
      this.talentscat = respo
      console.log(this.talentscat)
    })
  }
  view(id:number ){
  this.talentcatServices.gettalentCatById(id).subscribe(respo=>{
    console.log(id)
    this.router.navigate(['/home/talent_by_id/',{id}])
  })
  }
}
