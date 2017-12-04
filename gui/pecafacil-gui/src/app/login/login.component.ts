import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	prato = [{
		nome: 'Quentinha tradicional',
		valor: '10 reais',
		descricao: 'Frango acebolado',
		itens: 'Feijão, Arroz, Frango acebolado',
		tamanho: 'Medio'
	}];

  constructor() { }
  
  public addPrato() {
  	let nome : any = document.getElementById('nome');
  	let valor : any = document.getElementById('valor');
  	let descricao : any = document.getElementById('descricao');

  	console.log(nome.value);
  	this.prato.push({
		nome: nome.value,
		valor: valor.value,
		descricao: descricao.value,
		itens: 'Feijão, Arroz, Frango acebolado',
		tamanho: 'Medio'
	});
  }

  ngOnInit() {

  }

}
