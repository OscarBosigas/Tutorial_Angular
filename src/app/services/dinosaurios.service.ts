import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DinosauriosService {

  constructor(private http:HttpClient) { 
    this.cargarDinosaurios();
  }

  dinosaurios:any[] = [];

  cargarDinosaurios(){
    this.http.get("assets/data/dinosaurios.json").
      subscribe( respuesta => {
        this.dinosaurios = respuesta["dinosaurios"];
        console.log(this.dinosaurios);
      })
  }
}
