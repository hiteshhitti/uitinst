import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CehComponent } from './ceh.component';

describe('CehComponent', () => {
  let component: CehComponent;
  let fixture: ComponentFixture<CehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CehComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
