import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button class="btn btn-primary" (click)="acumulate(1)">+{{ base }}</button>
    <span>{{ number }}</span>
    <button class="btn btn-danger" (click)="acumulate(-1)">-{{ base }}</button>
  `
})

export class ContadorComponent {

  title: string= 'Contador App';
  number: number = 0;

  base: number = 5;

  acumulate(value:number){
    this.number += this.base * value
  }


}
