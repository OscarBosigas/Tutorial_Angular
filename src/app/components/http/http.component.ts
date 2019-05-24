import { Component, OnInit } from '@angular/core';
import { DinosauriosService } from '../../services/dinosaurios.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor( private _ds:DinosauriosService) { }

  ngOnInit() {
  }

}
