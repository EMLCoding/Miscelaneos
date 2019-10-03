import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  //Este componente tiene su HTML directamente aqui
  /* style.fontSize = style.font-size. Se pone entre corchetes porque se va a poder controlar por una variable */
  template: `
    
    <p [style.fontSize.px]="tamano">
      Hola mundo
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano+5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano-5">
      <i class="fa fa-minus"></i>
    </button>


  `,
  //Este componente tiene su CSS directamente aqui
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number = 10;

  constructor() { }

  ngOnInit() {
  }

}
