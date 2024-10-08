import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges {
  @Input() data: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data'] && !changes['data'].isFirstChange() ){
      console.log('Previous Value:', changes['data'].previousValue)
      console.log('Current Value: ', changes['data'].currentValue)
    }

  }
}
