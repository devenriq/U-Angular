import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()

export class DbzService{
  private _personajes: Personaje[] =[
    {
      nombre: 'Goku',
      poder: 13442
    }
  ]

  get personajes(): Personaje[]{
    return [...this._personajes]
  }

  constructor(){}

  addCharacter(personaje:Personaje){
    this._personajes.push(personaje)
  }
}
