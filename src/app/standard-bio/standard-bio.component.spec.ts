import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardBioComponent } from './standard-bio.component';

describe('StandardBioComponent', () => {
  let component: StandardBioComponent;
  let fixture: ComponentFixture<StandardBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardBioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
