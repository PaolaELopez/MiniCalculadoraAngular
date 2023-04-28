import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a la Mini Calculadora de Angular';
//crenado variables de clase
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;

  //crenado un metodo Suma
  sumar():void{
    this.resultado= this.numero1 + this.numero2;
  }
  restar():void{
    this.resultado= this.numero1 - this.numero2;
  }
  multiplicar():void{
    this.resultado= this.numero1 * this.numero2;
  }
  dividir():void{
    this.resultado= this.numero1 / this.numero2;
  }

}
