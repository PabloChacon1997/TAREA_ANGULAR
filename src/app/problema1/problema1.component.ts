import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problema1',
  templateUrl: './problema1.component.html',
  styleUrls: ['./problema1.component.css']
})
export class Problema1Component implements OnInit {
  

  art = {
    codigo:null,
    descripcion: null,
    precio: null
  }

  articulos = [
    {
    codigo: 1,
    descripcion: 'papas',
    precio: 10.50
    },
    {
      codigo: 2,
      descripcion: 'manzanas',
      precio: 5.60
    },
    {
      codigo: 3,
      descripcion: 'leche',
      precio: 7.60
    },
    {
      codigo: 4,
      descripcion: 'miel',
      precio: 1.45
    }
  ];

  hayRegistros() {
    return this.articulos.length > 0;
  }

  borrar(art) {
    for(let x=0; x < this.articulos.length; x++) {
      if(this.articulos[x].codigo == art.codigo) {
        this.articulos.splice(x, 1 )
        return;
      }
    }
  }

  agregar(){
    for (let x=0; x < this.articulos.length; x++) 
      if(this.articulos[x].codigo == this.art.codigo) {
        alert("ya existe un articulo con este codigo");
        return;
      }
      this.articulos.push(
        {
          codigo: this.art.codigo,
          descripcion: this.art.descripcion,
          precio: this.art.precio
        }
      );
      this.art.codigo= null;
      this.art.descripcion= null;
      this.art.precio= null;
  
  }

  seleccionar(art) {
    this.art.codigo= art.codigo;
    this.art.descripcion= art.descripcion;
    this.art.precio= art.precio;
  }

  modificar() {
    for (let x=0; x < this.articulos.length; x++) 
      if(this.articulos[x].codigo == this.art.codigo) {
        this.articulos[x].descripcion= this.art.descripcion;
        this.articulos[x].precio= this.art.precio;
        return;
      }
      alert("No existe este codigo de articulo");
    
  }
  constructor() { }

  ngOnInit() {
  }

}
