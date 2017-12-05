import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css']
})
export class PratoComponent implements OnInit {

	pratos = [];

  constructor(private apiService: ApiService) { 

	}
  
  public addPrato() {
  	let nome : any = document.getElementById('nome');
  	let valor : any = document.getElementById('valor');
  	let descricao : any = document.getElementById('descricao');
  	let dropItem : any = document.getElementById('dropItem');
  	let dropTam : any = document.getElementById('dropTam');

		let prato = {
			Nome: nome.value,
			Valor: valor.value,
			Descricao: descricao.value,
			Tamanho: dropTam.value
		};
		this.apiService.addPrato(prato);

  	this.pratos.push(prato);
  }

  public deletePrato(id){
  	this.pratos.splice(id,1);
  }

  public editPrato(id){}

  async ngOnInit() {
		this.pratos = await this.apiService.getPratos();
  }

}
