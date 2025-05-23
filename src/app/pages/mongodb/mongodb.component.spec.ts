import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodbComponent } from './mongodb.component';

describe('MongodbComponent', () => {
  let component: MongodbComponent;
  let fixture: ComponentFixture<MongodbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MongodbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MongodbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
