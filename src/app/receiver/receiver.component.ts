import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.scss'
})
export class ReceiverComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService)
  message = ''

  ngOnInit(): void {
      this.route.queryParams.subscribe(params =>{
        this.message = params['message'] || 'No message passed'
      });

      this.dataService.currentMessage.subscribe((message)=>{
        this.message = message;
      });
  }



}
