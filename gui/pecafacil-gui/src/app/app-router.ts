//------------------------------------------- Angular Imports ---------------------------------------------------

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//------------------------------------------- Main Imports ---------------------------------------------------

import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';

//------------------------------------------- Components ---------------------------------------------------

import {PratoComponent} from './prato/prato.component'
import {LoginComponent} from './login/login.component'
import { HomeComponent } from './home/home.component';

//-------------------------------------------------- Routes --------------------------------------------------------

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'pratos', component: PratoComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }