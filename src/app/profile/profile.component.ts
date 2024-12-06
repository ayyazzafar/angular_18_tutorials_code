import { Component, Input } from '@angular/core';
import { AdminBioComponent } from '../bio/bio.component';
import { StandardBioComponent } from '../standard-bio/standard-bio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() userType: 'admin' | 'standard' ='admin';

  getBioComponent(){
    return this.userType==='admin'?AdminBioComponent:StandardBioComponent;
  }
}


