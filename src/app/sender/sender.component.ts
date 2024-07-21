import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.scss'
})
export class SenderComponent {
  private router = inject(Router)
  private dataService = inject(DataService)

  navigate(){
    this.router.navigate(['/'], {
      queryParams:{
        message: 'Hello from sender'
      }
    })
  }

  sendServiceMessage(){
    this.dataService.changeMessage('Hello from sender through Service')
  }
}
