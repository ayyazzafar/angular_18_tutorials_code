import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContentChildComponent } from './dynamic-content-child.component';

describe('DynamicContentChildComponent', () => {
  let component: DynamicContentChildComponent;
  let fixture: ComponentFixture<DynamicContentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicContentChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
