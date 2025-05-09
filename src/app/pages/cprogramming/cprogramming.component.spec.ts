import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprogrammingComponent } from './cprogramming.component';

describe('CprogrammingComponent', () => {
  let component: CprogrammingComponent;
  let fixture: ComponentFixture<CprogrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CprogrammingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CprogrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
