import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-content-child',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-content-child.component.html',
  styleUrl: './dynamic-content-child.component.scss'
})
export class DynamicContentChildComponent {
  @Input() title!: string;
  @Input() content!: string;
}
