import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Times } from '../login/times';
import { Votos } from './votacao';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dadosSalvos: any
  meuTime : Times = {} as Times
  meuVoto : Votos = {} as Votos
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

    validaVoto(myForm: NgForm) {
      //Valida se voto não é vazio
      if(this.meuVoto.timeVoto) {
        for(let i = 0; i < this.listaTime.length;i++) {
          //Verifica se o voto 
          if(this.meuVoto.timeVoto == i+1) {
            console.log(this.meuVoto.timeVoto, i+1)
            this.listaTime[i].votos++ 
          }
        }
      }
      //Envia ao localStorage, com a chave time a lista de objetos
      localStorage.setItem(this.chave, JSON.stringify(this.listaTime))

      //Reseta o formulário
      myForm.resetForm()
    }
}


