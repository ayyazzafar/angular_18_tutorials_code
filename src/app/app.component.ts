import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    breakpointObserver = inject(BreakpointObserver);

    constructor(){
      this.breakpointObserver.observe([
        Breakpoints.Handset
      ]).subscribe((result: BreakpointState)=>{
          if(result.matches){
            console.log('This is a handset device');
          }
      });
    }
}
