import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.scss']
})
export class FizzBuzzComponent implements OnInit {
  input: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  fizzBuzz(n: number): string {
    if (n <= 0) {
      return '';
    }
    const divisibleBy3 = n % 3 === 0;
    const divisibleBy5 = n % 5 === 0;
    let str = '';
    if (divisibleBy3) {
      str += 'Fizz';
    }
    if (divisibleBy5) {
      str += 'Buzz';
    }
    if (!str) {
      str = n.toString();
    }
    return str;
  };

  fizzBuzzList(n: number): string {
    const result: string[] = [];
    for (let index = 1; index <= n; index++) {
      const divisibleBy3 = n % 3 === 0;
      const divisibleBy5 = n % 5 === 0;
      if (divisibleBy3 && divisibleBy5) {
        result.push('FizzBuzz');
      }
      else if (divisibleBy3) {
        result.push('Fizz');
      }
      else if (divisibleBy5) {
        result.push('Buzz');
      } else {
        result.push(index.toString());
      }
    }
    return result.join(', ');
  };

}
