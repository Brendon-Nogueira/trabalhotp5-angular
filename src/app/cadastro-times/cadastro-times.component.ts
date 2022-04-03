import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Times } from '../login/times';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro-times.component.html',
  styleUrls: ['./cadastro-times.component.css']
})
export class CadastroTimesComponent implements OnInit {

  meuTime : Times = {} as Times
  listaTime : Times[] = []
  dadosSalvos: any
  chave: string = "time"
  
  constructor() { }

  salvarTimes(myForm: NgForm) {
    
    //Adiciona a lista de times o novo time
    this.meuTime.votos = 0
    this.listaTime.push(this.meuTime)
    this.meuTime = {} as Times

    //Envia ao localStorage, com a chave time a lista de objetos
    localStorage.setItem(this.chave, JSON.stringify(this.listaTime))

    //Reseta o formulário
    myForm.resetForm()
  }

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
