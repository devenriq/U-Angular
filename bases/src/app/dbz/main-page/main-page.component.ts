import { Component } from '@angular/core';
import { Personaje } from "../interfaces/dbz.interface";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] =[
    {
      nombre: 'Goku',
      poder: 13442
    }
  ]

  nuevo: Personaje={
    nombre:'',
    poder: 0
  }

  agregar(){
    if (this.nuevo.nombre.trim().length===0 && this.nuevo.poder >0) {
      return
    }
      this.personajes.push(this.nuevo)
      this.nuevo={
        nombre: '',
        poder: 0,
      }
    console.log(this.personajes)
  }

}
