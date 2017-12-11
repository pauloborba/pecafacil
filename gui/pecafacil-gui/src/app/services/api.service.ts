import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
 
@Injectable()
export class ApiService {
    constructor(private http: Http) { }
 
    async addPrato(prato) {
        let usuario = JSON.parse(localStorage.getItem('usuarioAtual'));
        prato['IdFornecedor'] = usuario.Id;

        let data:any = await this.http.post('http://localhost:3000/api/v1/pratos', JSON.stringify(prato), { headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise();
        data = data.json();
        
        if(data.sucesso) return data.prato;
        else return false;

    }

    async getPratos() {
        let usuario = JSON.parse(localStorage.getItem('usuarioAtual'));
        let queryParams: URLSearchParams = new URLSearchParams();
        queryParams.set('IdFornecedor', usuario.Id);

        let data:any = await this.http.get('http://localhost:3000/api/v1/pratos', { search: queryParams, headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise();
        data = data.json();
        
        return data;
    }
}