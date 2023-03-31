import { Component } from '@angular/core';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { PersonalDetails } from 'src/app/services/Personal_Details';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
img:any
personal_inf: PersonalDetails= new PersonalDetails()
  constructor(private image:PersonalDetailsService){

  }
ngOnInit() {

// this.getImg();
}
  // getImg(){
  //   this.image.getUser_info(parseInt(localStorage.getItem('user') || '0', 10)).subscribe(respo=>{
  //    this.img = respo

  //   })
  // }
}
