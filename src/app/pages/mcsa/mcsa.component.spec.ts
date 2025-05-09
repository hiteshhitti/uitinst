import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McsaComponent } from './mcsa.component';

describe('McsaComponent', () => {
  let component: McsaComponent;
  let fixture: ComponentFixture<McsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McsaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
