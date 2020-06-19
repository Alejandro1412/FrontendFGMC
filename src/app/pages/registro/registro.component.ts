import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import {AuthService} from '../../services/auth.service'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  auth: any;

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.usuario.email = 'example@hotmail.com';
  }

  onSubmit( form: NgForm ) {
    if ( form.invalid ) { return ; }

    this.auth.nuevoUsuario(this.usuario)
      .subscribe( resp => {
        console.log(resp);
      })
  }


}
