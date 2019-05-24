import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {


  nombre: string = 'Oscar';
  nota: number = 10;

  constructor() { }

  ngOnInit() {
  }

  cambiar_nombre() {
    this.nombre = 'Oscar Fernando';
  }
  
}