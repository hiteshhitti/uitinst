import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyComponent } from './tally.component';

describe('TallyComponent', () => {
  let component: TallyComponent;
  let fixture: ComponentFixture<TallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
