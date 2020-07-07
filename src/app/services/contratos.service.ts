import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contratoModel } from '../models/contrato.model';


@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  contratos: contratoModel[];

  constructor(private http: HttpClient) {   }


    obtenerContratos() { 
      return this.http.get('http://localhost:3000/contratos');
    }
  
    obtenerContrato(_id: string) {
      return this.http.get('http://localhost:3000/contrato' +`/${_id}`);  
  
    }
    crearContrato(Contrato: contratoModel) {
      return this.http.post('http://localhost:3000/contrato', Contrato);
  
    }
  
    eliminarContrato(_id : string) {
      return this.http.delete('http://localhost:3000/contrato'+`/${_id}`);
  
    }
  
     //actualizarCargo(Cargo: contratoModel) {
      //return this.http.put('http://localhost:3000/cargo'+ `/${ Cargo._id}`, Cargo);
  
     //}
  
   
}
