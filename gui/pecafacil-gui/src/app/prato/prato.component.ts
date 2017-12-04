import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css']
})
export class PratoComponent implements OnInit {

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
