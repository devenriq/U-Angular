import { Component } from '@angular/core';
import { Personaje } from "../interfaces/dbz.interface";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] =[
    {
      nombre: 'Goku',
      poder: 13442
    }
  ]

  nuevo: Personaje={
    nombre: 'Maestro Roshi',
    poder: 430
  }

  addNewCharacter(argumento:Personaje){
    this.personajes.push(argumento)
    // console.log(argumento)
  }
}
