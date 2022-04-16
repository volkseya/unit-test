import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summation',
  templateUrl: './summation.component.html',
  styleUrls: ['./summation.component.scss']
})
export class SummationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calculateSum(a: number, b: number): number {
    return a + b;
  }

}
