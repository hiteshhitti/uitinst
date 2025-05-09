import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavadsaComponent } from './javadsa.component';

describe('JavadsaComponent', () => {
  let component: JavadsaComponent;
  let fixture: ComponentFixture<JavadsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavadsaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavadsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
