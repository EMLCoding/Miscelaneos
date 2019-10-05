import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  //Con este constructor se recoge el parametro de esta ruta (el ID)
  constructor( private router:ActivatedRoute) {
    this.router.params.subscribe ( parametros =>{
      console.log("RUTA PADRE")
      console.log(parametros);
    })
   }

  ngOnInit() {
  }

}
