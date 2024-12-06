import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-content',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './lazy-content.component.html',
  styleUrl: './lazy-content.component.scss'
})
export class LazyContentComponent {
  advancedComponent: any;

  async loadAdvancedFeatures(){
    try{
      const module = await import('../advanced-features/advanced-features.component')
      this.advancedComponent = module.AdvancedFeaturesComponent;
    }
    catch(e){
      console.error('Failed to load component:', e)
    }
  }
}
