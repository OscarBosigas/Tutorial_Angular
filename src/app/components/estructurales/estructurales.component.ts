import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructurales',
  templateUrl: './estructurales.component.html',
  styleUrls: ['./estructurales.component.css']
})
export class EstructuralesComponent implements OnInit {

  mostrar:boolean = false;
  arr:string[] = ["uno","dos","tres","cuatro"];

  constructor() { }

  ngOnInit() {
  }

}
