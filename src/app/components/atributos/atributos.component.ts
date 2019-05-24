import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent implements OnInit {

  nombre_alt:string = "Este es un gato";
  url_imagen: string = "assets/img/gato.jpg";

  constructor() { }

  ngOnInit() {
  }

}
