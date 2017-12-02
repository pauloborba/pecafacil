abstract class Usuario {
	private _login : string;
	private _senha : string;
	private _nome : string;
	private _telefone : string;

	constructor(_login: string, _senha: string, _nome: string, _telefone: string) {
		this._senha = _senha;
    this._login = _login;
    this._telefone = _telefone;
    this._nome = _nome;
	}

	get login(): string {
  	return this._login;
  }

	set login(l : string) {
  	this._login = l;
  }

	get senha(): string {
  	return this._senha;
  }

	set senha(s : string) {
  	this._senha = s;
  }

	get nome(): string {
  	return this._nome;
  }

	set nome(n : string) {
  	this._nome = n;
  }

	get telefone(): string {
  	return this._telefone;
  }

	set telefone(t : string) {
  	this._telefone = t;
  }

}