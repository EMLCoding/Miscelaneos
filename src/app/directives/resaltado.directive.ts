//"ElementRef permite hacer referencia al componente HTMl en el que se ponga "appResaltado".
//"HostListener" permitira poner elementos html a la escucha, como por ejemplo para comprobar si se ha pasado el raton por encima o no
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

//CON LAS DIRECTIVAS PERSONALIZADAS PODEMOS HACER QUE AQUELLOS COMPONENTES HTML QUE TENGAN "appResaltado" SEAN AFECTADOS POR LAS OPERACIONES AQUI INDICADAS
@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private elementRef:ElementRef) {
    console.log("Directiva llamada")
   }

   //Para indicar que va a ser algo que va a venir desde el HTML. El componente html debe estar entre [],en este caso [appResaltado]
   @Input("appResaltado") nuevoColor: string;

   //Los HostListener no se inyectan en el constructor como otros import, sino que se usa la @ y entre parentesis va el evento. "pasarRatonPorEncima" es el ID que yo le he dado
   @HostListener('mouseenter') pasarRatonPorEncima(){
    this.elementRef.nativeElement.style.backgroundColor = this.nuevoColor;
   }
   @HostListener('mouseleave') quitarRaton(){
    this.elementRef.nativeElement.style.backgroundColor = null;
   }

}
