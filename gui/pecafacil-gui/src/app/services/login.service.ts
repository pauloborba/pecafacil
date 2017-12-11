import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
 
@Injectable()
export class LoginService {
    constructor(private http: Http) { }
 
    async login(_login, _senha) {
        let queryParams: URLSearchParams = new URLSearchParams();
        queryParams.set('Login', _login);
        queryParams.set('Senha', _senha);
        let data:any = await this.http.get('http://localhost:3000/api/v1/usuarios', { search: queryParams, headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise();
        data = data.json();
        if(data && data.length > 0) {
            queryParams = new URLSearchParams();
            queryParams.set('IdUsuario', data[0]['Id']);
            data = await this.http.get('http://localhost:3000/api/v1/fornecedores', { search: queryParams, headers: new Headers({ 'Content-Type': 'application/json' }) }).toPromise();
            data = data.json();
            localStorage.setItem('usuarioAtual', JSON.stringify(data[0]));
            return data[0];
        } else {
            return false;
        }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('usuarioAtual');
    }
}