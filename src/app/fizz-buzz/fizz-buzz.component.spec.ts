import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzComponent } from './fizz-buzz.component';
import { FormsModule } from '@angular/forms';

describe('FizzBuzzComponent', () => {
  let component: FizzBuzzComponent;
  let fixture: ComponentFixture<FizzBuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzBuzzComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if input is divisible by 3 and 5 should return FizzBuzz', () => {
    expect(component.fizzBuzz(15)).toBe('FizzBuzz');
  })

  it('if input is divisible by 3 but not 5 should return Fizz', () => {
    expect(component.fizzBuzz(6)).toBe('Fizz');
  })

  it('if input is divisible by 5 but not 3 should return Buzz', () => {
    expect(component.fizzBuzz(10)).toBe('Buzz');
  })

  it('if input is not divisible by 5 and 3 should return that number', () => {
    expect(component.fizzBuzz(7)).toBe('7');
  })
});
