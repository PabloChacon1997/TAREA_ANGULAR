import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-problema4',
  templateUrl: './problema4.component.html',
  styleUrls: ['./problema4.component.css']
})
export class Problema4Component implements OnInit {
  articulos=null;

  constructor(private articulosServicio:ArticulosService) { }

  ngOnInit() {
    this.articulos=this.articulosServicio.retornar();
  }

}
