import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-problema6',
  templateUrl: './problema6.component.html',
  styleUrls: ['./problema6.component.css']
})
export class Problema6Component implements OnInit {

  @Input() valor:number;
  constructor() { }

  ngOnInit() {
  }

}
