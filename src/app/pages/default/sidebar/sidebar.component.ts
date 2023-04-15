import { Component } from '@angular/core';
import { PersonalDetailsService } from 'src/app/services/personal-details.service';
import { PersonalDetails } from 'src/app/services/Personal_Details';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

}

