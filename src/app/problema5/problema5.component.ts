import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problema5',
  templateUrl: './problema5.component.html',
  styleUrls: ['./problema5.component.css']
})
export class Problema5Component implements OnInit {

  nombre="Juan Carlos";
  saldo=1000.50;
  dias=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
  articulos=[{
    codigo:1,
    descripcion:"papas",
    precio:12.33

  },

  {
    codigo:2,
    descripcion:"manzanas",
    precio:54

  }];
  fechaActual=new Date();
  constructor() { }

  ngOnInit() {
  }

}
