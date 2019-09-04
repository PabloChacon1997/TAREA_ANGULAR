import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problema3',
  templateUrl: './problema3.component.html',
  styleUrls: ['./problema3.component.css']
})
export class Problema3Component implements OnInit {
  
  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string;
  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
   }
   retornarAleatorio(){
    return Math.trunc( Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3  ) {
      this.resultado = 'Ganaste';
    } else {
      this.resultado = 'Perdiste';
    }
  }
  ngOnInit() {
  }

}
