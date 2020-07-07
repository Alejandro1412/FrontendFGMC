import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContratosService } from '../../services/contratos.service';
import { contratoModel } from '../../models/contrato.model';





@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
})

export class ContratosComponent implements OnInit {
  
  contratos: any;
  contrato: any;


  constructor(private contratosService: ContratosService) {
    //this.obtenerTodosContratos();
    //console.log(this.contrato); 

  }
  obtenerTodosContratos() {
    this.contratosService.obtenerContratos().subscribe( res => {
      this.contratos = res;
      console.log(this.contratos)

    },
      error => {
        console.log(JSON.stringify(error))
      }
    )
  }

  ngOnInit() {
  }

  obtenerUnContrato(_id) {
    this.contratosService.obtenerContrato(_id).subscribe( res => {
      this.contratos = res;
      console.log(this.contratos)

    },
      error => {
        console.log(JSON.stringify(error))
      }
    )
  }

  crearUnContrato(f: NgForm) {
    console.log(f.value.nombre);
    this.contrato = {
      nombreContrato: f.value.nombre,
      lugarExpedicion: f.value.lugarExpedicion,
      fechaNacimiento: f.value.fechanacimiento,
      CajaCompensacion: f.value.cajacompensacion,
      afp_FondoPensiones: f.value.afp,
      eps: f.value.eps,
      fechaIngreso: f.value.fechaingreso ,
      fechaRetiro: f.value.fecharetiro ,
      salario: f.value.salario,
      auxilioporTrayecto: f.value.auxTrayecto,
      auxilioporTransporte: f.value.auxTransporte,
      cargo: f.value.cargo,
      titulo: f.value.titulo,
      universidad: f.value.universidad,
      telefono: f.value.telefono,
      direccion: f.value.direccion,
      email: f.value.email,
      observacion: f.value.observacion
    }

    console.log(this.contrato);
    this.contratosService.crearContrato(this.contrato).subscribe( res => {
    })
    error => {
      console.log(JSON.stringify(error))
    }
  }

  eliminarUnContrato(_id){
    this.contratosService.eliminarContrato(_id).subscribe( res =>{
      this.obtenerTodosContratos();
    })
    error => {
      console.log(JSON.stringify(error))
    }

  }



}
