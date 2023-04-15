import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TalentCatService } from 'src/app/services/talentCat/talent-cat.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent  {
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
  this.router.navigate(['/talent_login_id/',{id}])
})
}
}
