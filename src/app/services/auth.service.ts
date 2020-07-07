import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logins: UsuarioModel[];

  // private url = 'http://localhost:3000';
  // private apikey = 'http://localhost:3000';

  constructor( private http: HttpClient) {}


  logout() {

  }

  login( Login: UsuarioModel ) {
    return this.http.post('http://localhost:3000/login', Login);
  }

  // login( usuario: UsuarioModel) {
  //    const authData = {
  //      email: usuario.email,
  //      password: usuario.password,
  //     //  returnSecureToken: true
  //    }
  //    return this.http.post(
  //      `${this.url}/veryfypassword?key=$[this.apikey]`,
  //      authData
  //    );

  // }








  // public isAutheticated(): boolean {
  //   const token = localStorage.getItem('ACCESS_TOKEN');
  //   if(!token){
  //     // console.log("Token does not exists");
  //     return false;
  //   }else{
  //     // console.log("Token exists");
  //     return true;
  //   }
  // }


  // nuevoUsuario( usuario :UsuarioModel) {

  //   const authData = {
  //     email: usuario.email,
  //     password: usuario.password,
  //   }
    
  // }
}
