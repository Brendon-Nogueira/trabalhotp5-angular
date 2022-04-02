import { Component, OnInit } from '@angular/core';
import { Times } from '../login/times';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dadosSalvos: any
  meuTime : Times = {} as Times
  chave: string = "time"
  listaTime : Times[] = []

  constructor() { }

  ngOnInit(): void {
    this.dadosSalvos = localStorage.getItem(this.chave)

    //Verifica se existem dados salvos no localStorage
    if (this.dadosSalvos){

      //Utiliza a variável A para pegar os objetos e então passá-los ao listaTime
      let a = JSON.parse(this.dadosSalvos)
      for(let i = 0; i < a.length;i++) {
        this.meuTime = {} as Times
        this.meuTime.nome = a[i].nome
        this.meuTime.cidade = a[i].cidade
        this.meuTime.estado = a[i].estado
        this.meuTime.votos = a[i].votos
        this.listaTime.push(this.meuTime)
      }
    }
  }

}
