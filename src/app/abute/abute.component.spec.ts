import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbuteComponent } from './abute.component';

describe('AbuteComponent', () => {
  let component: AbuteComponent;
  let fixture: ComponentFixture<AbuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbuteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
