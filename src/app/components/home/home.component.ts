import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
        <!-- HTML de ng-style.component.ts -->
        <app-ng-style></app-ng-style>

        <br>

        <app-css></app-css>
        <p>
            HOLA MUNDO
        </p>
    
        <br>

        <app-clases></app-clases>
    
        <br>

        <h3>Directivas personalizadas</h3>
        <!-- Aquellos elementos HTML con "appResaltado" se veran afectados por las operaciones de la Directiva Personalizada "resaltado.directive.ts" -->
        <!-- Se pone [appResaltado] para que sea escuchado por el Input del TS y poder recoger el color deseado -->
        <p [appResaltado]="'red'">Hola mundo</p>

        <br>

        <h3>NGSWITCH</h3>
        <app-ng-switch></app-ng-switch>
    
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
                                      AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log("constructor")
  }

  ngOnChanges(){
    console.log("OnChanges");
  }

  ngOnInit() {
    console.log("OnInit");
  }

  ngDoCheck(){
    console.log("DoCheck");
  }

  ngAfterContentInit(){
    console.log("AfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("AfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("AfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked");
  }

  ngOnDestroy(){
    console.log("OnDestroy");
  }

}
