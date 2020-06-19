import { Component, OnInit } from '@angular/core';
import { CargoService } from '../../services/cargo.service';
import { NgForm } from '@angular/forms';
import { cargoModel } from '../../models/cargo.model';
import { error } from 'protractor';
import { ClassField } from '@angular/compiler';


@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
})
export class CargoComponent implements OnInit {
  cargos: any;
  cargo: any;
  

  constructor( private cargoService: CargoService) {
    //this.obtenerTodosCargos();

   }

   obtenerTodosCargos() {
     this.cargoService.obtenerCargos().subscribe( res => {
       this.cargos = res;
       console.log(this.cargos)

     },
       error => {
         console.log(JSON.stringify(error))
       }
     )
   }

  ngOnInit() {
  }


//   actualizarUnCargo(_id) {
//     this.cargoService.actualizarCargo(_id).subscribe( res => {

//     })
//     error => {
//       console.log(JSON.stringify(error))
//   }
// }

  obtenerUnCargo(_id) {
    this.cargoService.obtenerCargo(_id).subscribe( res => {
      this.cargos = res;
      console.log(this.cargos)

    },
      error => {
        console.log(JSON.stringify(error))
      }
    )
  }


  crearUnCargo(form: NgForm) {
    this.cargo = {
      nombreCargo: form.value.cargos
    }

    console.log(this.cargo);
    this.cargoService.crearCargo(this.cargo).subscribe( res => {
    })
    error => {
      console.log(JSON.stringify(error))
    }
  }


  eliminarUnCargo(_id){
    this.cargoService.eliminarCargo(_id).subscribe( res =>{
      this.obtenerTodosCargos();
    })
    error => {
      console.log(JSON.stringify(error))
    }

  }

}
