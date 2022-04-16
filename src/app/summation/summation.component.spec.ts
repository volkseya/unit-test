import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummationComponent } from './summation.component';

describe('SummationComponent', () => {
  let component: SummationComponent;
  let fixture: ComponentFixture<SummationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('0 + 0 should return 0', () => {
    expect(component.calculateSum(0, 0)).toBe(0);
  });

  it('positive + positive should return positive', () => {
    expect(component.calculateSum(1, 1)).toBeGreaterThan(0);
  });

  it('negative + negative should return negative', () => {
    expect(component.calculateSum(-1, -1)).toBeLessThan(0);
  });

  it('positive value of bigger number + negative value of smaller number should return positive', () => {
    expect(component.calculateSum(2, -1)).toBeGreaterThan(0);
  });

  it('negative value of bigger number + positive value of smaller number should return negative', () => {
    expect(component.calculateSum(-2, 1)).toBeLessThan(0);
  });

  it('summation of the positive and negative values of the same number should return 0', () => {
    expect(component.calculateSum(1, -1)).toBe(0);
  });
});
