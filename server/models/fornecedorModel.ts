import Usuario from 'usuarioModel'
import Prato from 'pratoModel'
import Item from 'itemModel'
import LocalEntrega from 'localEntregaModel'

class Fornecedor extends Usuario {
  
	private _pratos : [Prato];
	private _itens : [Item];
	private _logo : ImageView;
	private _locais : [LocalEntrega];
  private _cnpj : string;

	constructor(_login: string, _senha: string, _nome: string, _telefone: string, _pratos: [Prato]
                      , _itens: [Item], _logo: ImageView, _locais: [LocalEntrega], _cnpj : string){
  	super(_login, _senha, _nome, _telefone);
    this._pratos = _pratos;
    this._itens = _itens;
    this._logo = _logo;
    this._locais = _locais;
    this._cnpj = _cnpj;
  }

	get pratos(): [Prato] {
  	return this._pratos;
  }

	set pratos(p : [Prato]) {
  	this._pratos = p;
  }

	get itens(): [Item] {
  	return this._itens;
  }

	set itens(i : [Item]) {
  	this._itens = i;
  }

	get logo(): string {
  	return this._logo;
  }

	set logo(l : string) {
  	this._logo = l;
  }

	get locais(): [LocalEntrega] {
  	return this._locais;
  }

	set locais(l : [LocalEntrega]) {
  	this._locais = l;
  }

	get cnpj(): string {
  	return this._cnpj;
  }

	set cnpj(c : string) {
  	this._cnpj = c;
  }

}