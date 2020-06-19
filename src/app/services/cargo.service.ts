import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cargoModel } from '../models/cargo.model';


@Injectable({
  providedIn: 'root'
})
export class CargoService {

  cargos: cargoModel[];
  

  constructor( private http: HttpClient) { }

  obtenerCargos() { 

    return this.http.get('http://localhost:3000/cargos');
  }

  obtenerCargo(_id: string) {
    return this.http.get('http://localhost:3000/cargos' +`/${_id}`);  

  }

  crearCargo(Cargo: cargoModel) {
    return this.http.post('http://localhost:3000/cargo', Cargo);

  }

  eliminarCargo(_id : string) {
    return this.http.delete('http://localhost:3000/cargo'+`/${_id}`);

  }

  // actualizarCargo(Cargo: cargoModel) {
    //return this.http.put('http://localhost:3000/cargo'+ `/${ Cargo._id}`, Cargo);

  // }


}

