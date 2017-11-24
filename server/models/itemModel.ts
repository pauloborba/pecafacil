class Item {
	private _nome: string;
	private _descricao: string;
	
	constructor(_nome: string, _descricao : string){
  	this._nome=_nome;
    this._descricao = _descricao;
  }

	get nome(): string {
  	return this._nome;
  }

	set nome(n : string) {
  	this._nome = n;
  }

	get descricao(): string {
  	return this._descricao;
  }

	set descricao(d : string) {
  	this._descricao = d;
  }

}