import Cliente from 'clienteModel'
import Fornecedor from 'fornecedorModel'
import Prato from 'pratoModel'
import LocalEntrega from 'localEntregaModel'
  
class Pedido {
  
  private _cliente: Cliente;
	private _fornecedor: Fornecedor;
	private _prato: Prato;
	private _localEntrega: LocalEntrega;
	private _dataEntrega: string;

	constructor(_cliente: Cliente, _fornecedor: Fornecedor, _prato: Prato
                    , _localEntrega: LocalEntrega, _dataEntrega: string){
    
    this._cliente: _cliente;
    this._fornecedor: _fornecedor;
  	this._prato : _prato;
    this._localEntrega : _localEntrega;
    this._dataEntrega : _dataEntrega;
  }
  
	set _cliente(_cliente: Cliente) {
  	this._cliente = _cliente;
  }

	get _cliente() {
  	return this._cliente;
  }

  
  get fornecedor() : Fornecedor{
  	return this._fornecedor;
  }

	set fornecedor(f : Fornecedor){
  	this._fornecedor = f;
  }

  get prato(): [Prato]{
  	return this._prato;
  }

	set prato(p : [Prato]){
  	this._prato = p;
  }

	get localEntrega(): _localEntrega{
  	return this._localEntrega;
  }

	set localEntrega(l : _localEntrega){
  	this._localEntrega = l;
  }

	get dataEntrega(): _dataEntrega{
  	return this._dataEntrega;
  }

	set dataEntrega(d : _dataEntrega){
  	this._dataEntrega = d;
  }
}