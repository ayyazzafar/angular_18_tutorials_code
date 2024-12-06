import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LazyContentComponent } from './lazy-content/lazy-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LazyContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular18';
}
