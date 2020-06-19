import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categoriaModel } from '../models/categoria.models';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  categorias: categoriaModel[];

  constructor(private http:HttpClient) { }

  obtenerCategorias() { 
    return this.http.get('http://localhost:3000/categoria');
  }

  obtenerCategoria(_id: string) {
    return this.http.get('http://localhost:3000/categoria' +`/${_id}`);  

  }
  crearCategoria(Categoria: categoriaModel) {
    return this.http.post('http://localhost:3000/categoria', Categoria);

  }

  eliminarCategoria(_id : string) {
    return this.http.delete('http://localhost:3000/categoria'+`/${_id}`);

  }

   //actualizarCategoria(Cargo: contratoModel) {
    //return this.http.put('http://localhost:3000/cargo'+ `/${ Cargo._id}`, Cargo);

   //}
}
