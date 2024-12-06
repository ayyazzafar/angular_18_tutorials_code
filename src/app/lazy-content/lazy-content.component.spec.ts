import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyContentComponent } from './lazy-content.component';

describe('LazyContentComponent', () => {
  let component: LazyContentComponent;
  let fixture: ComponentFixture<LazyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
