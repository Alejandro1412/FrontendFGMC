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


  constructor(private ContratosService: ContratosService) {
    //this.obtenerTodosContratos();
    //console.log(this.contrato); 

  }
  obtenerTodosContratos() {
    this.ContratosService.obtenerContratos().subscribe( res => {
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
    this.ContratosService.obtenerContrato(_id).subscribe( res => {
      this.contratos = res;
      console.log(this.contratos)

    },
      error => {
        console.log(JSON.stringify(error))
      }
    )
  }

  crearUnContrato(form: NgForm) {
    this.contrato = {
      nombreCargo: form.value.cargos
    }

    console.log(this.contrato);
    this.ContratosService.crearContrato(this.contrato).subscribe( res => {
    })
    error => {
      console.log(JSON.stringify(error))
    }
  }

  eliminarUnContrato(_id){
    this.ContratosService.eliminarContrato(_id).subscribe( res =>{
      this.obtenerTodosContratos();
    })
    error => {
      console.log(JSON.stringify(error))
    }

  }



}
