import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css']
})
export class PratoComponent implements OnInit {

	prato = [];

  constructor() { }
  
  public addPrato() {
  	let nome : any = document.getElementById('nome');
  	let valor : any = document.getElementById('valor');
  	let descricao : any = document.getElementById('descricao');
  	let dropItem : any = document.getElementById('dropItem');
  	let dropTam : any = document.getElementById('dropTam');

  	console.log(nome.value);
  	this.prato.push({
		nome: nome.value,
		valor: valor.value,
		descricao: descricao.value,
		itens: dropItem.value,
		tamanho: dropTam.value
	});
  }

  public deletePrato(id){
  	this.prato.splice(id,1);
  }

  public editPrato(id){}

  ngOnInit() {

  }

}
