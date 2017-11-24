class LocalEntrega{
 	private _endereco:string;
  private _cep:string;
	private _referencia:string;
	private _numero:string;
	private _complemento:string;
  private _latitude:double;
	private _longitude:double;
	
  constructor (_endereco:string,_cep:string,_referencia:string,_numero:string,_complemento:string,_latitude:double,_longitude:double){
    this._endereco = _endereco;
    this._cep = _cep;
    this._referencia = _referencia;
    this._numero = _numero;
    this._complemento = _complemento;
    this._latitude = _latitude;
    this._longitude = _longitude;
    
  }

	get endereco() : string{
    return this._endereco;
  }

	set endereco(e : string){
   this._endereco = e; 
  }
  
	get cep(): string {
  	return this._cep;
  }

	set cep(_cep:string){
  	this._cep=_cep;
  }

	get referencia(): string {
  	return this._referencia;
  }

	set referencia(_referencia:string){
  	this._referencia=_referencia;
  }

	get numero() : string{
    return this._numero;
  }

	set numero(e : string){
   this._numero = e; 
  }
    
	get complemento(): string{
  	return this._complemento;
  }
	set complemento(_complemento:string){
  	this._complemento=_complemento;
  }
  get latitude(): string{
  	return this._latitude;
  }
	set latitude(_latitude:string){
  	this._latitude=_latitude; 
  }
	get longitude(): string{
  	return this._longitude;
  }
	set longitude(_longitude:string){
  	this._longitude=_longitude;
  }  
}