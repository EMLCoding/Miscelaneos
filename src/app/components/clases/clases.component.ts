import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta:string = "alert-danger";

  propiedades:Object = {
    danger:true,
  }

  //Este atributo se indicara para hacer girar o no el componente "guardar cambios" del Html
    loading:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.loading = true;
    //Despues de 3 segundos se volvera a poner el "loading" en false
    setTimeout( () => this.loading = false, 3000 );
  }

}
