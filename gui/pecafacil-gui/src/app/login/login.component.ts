import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	model: any = {};
	returnUrl: string;

  constructor(private loginService: LoginService, private router: Router, private route : ActivatedRoute) {
		this.loginService.logout();
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

  ngOnInit() {
		
	}
	
	async onSubmit() {
		let res = await this.loginService.login(this.model.login, this.model.senha);
		if(res) {
			this.router.navigate([this.returnUrl]);
		}
		else {
			alert('falha ao logar');
		}
	}
}
