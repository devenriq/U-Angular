import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heros: string[]=['SpiderMan', 'IronMan', 'Hulk']
  erasedHeros:string[] = []

  borrarHero(){
    const heroErased = this.heros.pop() || ''
    this.erasedHeros.push(heroErased)
  }

}
