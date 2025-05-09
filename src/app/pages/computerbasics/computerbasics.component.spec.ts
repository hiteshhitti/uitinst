import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerbasicsComponent } from './computerbasics.component';

describe('ComputerbasicsComponent', () => {
  let component: ComputerbasicsComponent;
  let fixture: ComponentFixture<ComputerbasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerbasicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerbasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
