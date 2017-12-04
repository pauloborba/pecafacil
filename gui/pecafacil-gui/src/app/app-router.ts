//------------------------------------------- Angular Imports ---------------------------------------------------

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//------------------------------------------- Main Imports ---------------------------------------------------

import { AppComponent } from './app.component';

//------------------------------------------- Components ---------------------------------------------------

import {PratoComponent} from './prato/prato.component'
import {LoginComponent} from './login/login.component'

//-------------------------------------------------- Routes --------------------------------------------------------

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'pratos', component: PratoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }