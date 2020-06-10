import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;


  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioModel();

    this.usuario.email = 'alejopola14@hotmail.com';
  }
  onSubmit( form: NgForm ) {
    if ( form.invalid ) { return ; }
    console.log('Formulario Enviado');
    console.log(this.usuario);
    console.log(form);
  }


}
