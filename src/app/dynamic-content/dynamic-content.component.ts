import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { StandardBioComponent } from '../standard-bio/standard-bio.component';
import { DynamicContentChildComponent } from '../dynamic-content-child/dynamic-content-child.component';

@Component({
  selector: 'app-dynamic-content',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-content.component.html',
  styleUrl: './dynamic-content.component.scss'
})
export class DynamicContentComponent {

  @ViewChild('contentContainer', {
    read: ViewContainerRef
  })
  container!: ViewContainerRef

  async loadComponent(){
    this.container.clear();

    const componentRef = this.container.createComponent(DynamicContentChildComponent);

    componentRef.instance.title = 'Hello world';
    componentRef.instance.content = 'This is our content.'
  }

}
