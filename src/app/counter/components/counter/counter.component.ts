import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>{{title}}</h1>
  <hr>
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(-1)" >-1</button>
  <button (click)="reset()" >Reset</button>
  <button (click)="increaseBy(1)" >+1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public title:string = 'Primera App de Angular';
  public counter:number=10;

  increaseBy(value:number):void{
    if(this.counter > 0 || value > 0)
    this.counter += value;
  }

  reset():void{
    this.counter = 10;
  }
}
