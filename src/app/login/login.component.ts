import { Component, OnInit } from '@angular/core';
import { Times } from './times';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }
  myUser : User = {} as User
  myClub : Times = {} as Times

  validaLogin(Usuario : string , Password : string  ){
    if(Usuario != 'admin' && Password != 'pass'){
      console.log('usuario', Usuario, 'esta incorreto')
    }
    
  }
}
