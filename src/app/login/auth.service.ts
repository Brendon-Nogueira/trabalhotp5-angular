import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUser : boolean = false
  constructor(private router : Router) { }

  doLogin(usuario: User){
    if(usuario.name === 'admin' && usuario.pass === 'admin123'){
      this.authUser = true
      this.router.navigate(['/cadastro'])
    } else{
      this.authUser = false
      window.alert('Verifique o nome e senha! Novamente')
    }
  }
}
