import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelos/Security/login-usuario';
import { ServiciosService } from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password:string;
  roles:string[] = [];
  errMsg: string;

  constructor(
    private tokenAuthService: ServiciosService,
    private route:Router
  ) { }

  ngOnInit(): void {
    if(this.tokenAuthService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenAuthService.getAuthorities();
    }
  }
  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario,this.password);
    this.tokenAuthService.LoginUsuario(this.loginUsuario).subscribe(
      data=>{
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenAuthService.setToken(data.token);
        this.tokenAuthService.setUserName(data.nombreUsuario);
        this.tokenAuthService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.route.navigate(['']);
        setTimeout(() => {  
          window.location.reload();
      }, );
  
      },
      err =>{
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsg = err.error.message;
        console.log(this.errMsg);
      }
    )
  }

}
