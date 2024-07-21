import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  userId: string = '';
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
      this.route.params.subscribe(params=>{
        this.userId = params['id']
      });
  }

}
