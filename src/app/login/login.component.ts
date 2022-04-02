import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { User } from './user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private authService : AuthService){

  }

  myUser : User = {} as User
  usersList : User = {} as User

   /*validaLogin(Usuario : string , Password : string  ){
    if(Usuario != 'admin' && Password != 'pass'){
      console.log('usuario', Usuario, 'esta incorreto')
    }
  }*/
  ngOnInit(): void {
    
    }

    saveUser(){
      
    }
  }


 

  


  



