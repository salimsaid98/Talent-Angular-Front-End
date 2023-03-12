import { PersonalDetailsService } from './../../../services/personal-details.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
personalData:boolean = false
data!:any
constructor(private personal_info:PersonalDetailsService){

}
ngOnInit() {

 this.getInfos()
}

getInfos(){
  this.personal_info.getPersona_single(3).subscribe(response=>{

    console.log(response)
  })
}
}
