import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
})
export class CategoriaComponent implements OnInit {
  categorias: any;
  categoria: any;

  constructor(private categoriaService: CategoriaService) { }
  obtenerTodasCategorias() {
    this.categoriaService.obtenerCategorias().subscribe( res => {
      this.categorias = res;
      console.log(this.categorias)

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

 obtenerUnaCategoria(_id) {
   this.categoriaService.obtenerCategoria(_id).subscribe( res => {
     this.categorias = res;
     console.log(this.categorias)

   },
     error => {
       console.log(JSON.stringify(error))
     }
   )
 }

 crearUnaCategoria(form: NgForm) {
   this.categoria = {
     nombreCategoria: form.value.categorias
   }

   console.log(this.categoria);
   this.categoriaService.crearCategoria(this.categoria).subscribe( res => {
   })
   error => {
     console.log(JSON.stringify(error))
   }
 }


 eliminarUnaCategoria(_id){
   this.categoriaService.eliminarCategoria(_id).subscribe( res =>{
     this.obtenerTodasCategorias();
   })
   error => {
     console.log(JSON.stringify(error))
   }

 }

}
