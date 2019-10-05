//En este archivo se van a controlar todas las rutas hijas del Usuario

import { Routes } from '@angular/router'
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';

//Hay que exportarla para poder utilizarla en app.routes.ts
export const USUARIO_ROUTES: Routes = [
    { path: 'nuevo', component: UsuarioNuevoComponent },
    { path: 'editar', component: UsuarioEditarComponent },
    { path: 'detalle', component: UsuarioDetalleComponent },
    //Path por defecto
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo'}
]