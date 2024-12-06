import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-standard-bio',
  standalone: true,
  imports: [],
  templateUrl: './standard-bio.component.html',
  styleUrl: './standard-bio.component.scss'
})
export class StandardBioComponent {
@Input() data?: {title: string}
}
