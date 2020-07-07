import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  


  login : any;
  
  // usuario: UsuarioModel = new UsuarioModel();

  constructor(private loginService: AuthService, private router: Router) { }
  errorM: string;

  ngOnInit() {
    

  }
 



  accesologin ( f : NgForm) {
    if( f.invalid) {return;}

    
    
    

    if(f.value.email == "" || f.value.password == ""){
      console.log("Campos vacios")
      console.log(this.login);
    }
    else{

      this.login = {

        email: f.value.email,
        password: f.value.password
    }
    console.log(this.login);
    this.loginService.login(this.login).subscribe( res => {
      console.log("respuesta desde backend", res);
      this.router.navigate(['/home']);
    }, error => {
      console.log(error.error.response.status)
    })
  }


  // this.router.navigate(['/home'])

}

  
    // if( f.value.email && f.value.password == empty )
    //    console.log('no valido');
    // else


}
