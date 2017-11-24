import Usuario from 'usuarioModel'
import Pedido from 'pedidoModel'

class Cliente extends Usuario {
  private _cpf : string;
	private _pedido : [Pedido];
	
	constructor(_login: string, _senha: string, _nome: string, _telefone: string, _cpf: string, _pedido: [Pedido]){
		super(_login, _senha, _nome, _telefone);
		this._cpf = _cpf;
		this._pedido = _pedido;
	}

	get cpf() : string {
		return this._cpf;
	}

	set cpf(c : string) {
		this._cpf = c;
	}

	get pedido() : [Pedido]{
		return this._pedido;
	}

	set pedido(p : [Pedido]){
		this._pedido = p;
	}
}