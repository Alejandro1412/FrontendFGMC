import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000';
  private apikey = 'http://localhost:3000';

  constructor( private http: HttpClient ) {}

  logout() {

  }

  login( usuario: UsuarioModel) {

  }

  nuevoUsuario( usuario :UsuarioModel) {

    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    
  }
}
