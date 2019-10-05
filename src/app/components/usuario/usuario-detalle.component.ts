import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  //Con este constructor se puede recoger los parametros (en este caso el ID) de la ruta padre
  constructor( private router:ActivatedRoute) {
    this.router.parent.params.subscribe ( parametros =>{
      console.log("RUTA HIJA DETALLE")
      console.log(parametros);
    })
   }

  ngOnInit() {
  }

}
