class Prato{
	private _nome : string;
	private _valor : double;
	private _descricao : string;
	private _itens : [Item];
	private _tamanho : string;

	constructor(_nome: string, _valor : double, _descricao : string, _itens : [Item], _tamanho : string ){
  	this._nome=_nome;
    this._valor = _valor;
    this._descricao = _descricao;
    this._itens = [Item];
    this._tamanho = _tamanho;
  }

	get nome(): string {
  	return this._nome;
  }

	set nome(n : string) {
  	this._nome = n;
  }

	get valor(): int {
  	return this._valor;
  }

	set valor(c : int) {
  	this._valor = c;
  }

	get descricao(): string {
  	return this._descricao;
  }

	set descricao(d : string) {
  	this._descricao = d;
  }

	get itens(): [Item] {
  	return this._itens;
  }

	set itens(i : [Item]) {
  	this._itens = i;
  }

	get tamanho(): string {
  	return this._tamanho;
  }

	set tamanho(n : string) {
  	this._tamanho = n;
  }

}