import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredButtonComponent } from './colored-button.component';

describe('ColoredButtonComponent', () => {
  let component: ColoredButtonComponent;
  let fixture: ComponentFixture<ColoredButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoredButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColoredButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
