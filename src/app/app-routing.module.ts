import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { CargoComponent } from './pages/cargo/cargo.component';
import { ContratosComponent } from './pages/contratos/contratos.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';


const routes: Routes = [
  { path: 'home'    , component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'cargo'   , component: CargoComponent },
  { path: 'contrato'   , component: ContratosComponent },
  { path: 'categoria'   , component: CategoriaComponent },



  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
