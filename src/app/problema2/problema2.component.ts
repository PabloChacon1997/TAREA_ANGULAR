import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problema2',
  templateUrl: './problema2.component.html',
  styleUrls: ['./problema2.component.css']
})
export class Problema2Component implements OnInit {

    valor: number;

  constructor() { }

  ngOnInit() {
    this.valor=Math.trunc(Math.random() * 6) + 1;
  }

}
