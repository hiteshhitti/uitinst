import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerhardwareComponent } from './computerhardware.component';

describe('ComputerhardwareComponent', () => {
  let component: ComputerhardwareComponent;
  let fixture: ComponentFixture<ComputerhardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerhardwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerhardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
