"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu estou na pagina de login$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/login");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('PecafacilGui');
    }));
    When(/^Eu tento logar com login "([^\"]*)" e senha "([^\"]*)"$/, (login, senha) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='login']").sendKeys(login);
        yield protractor_1.$("input[name='senha']").sendKeys(senha);
        yield protractor_1.element(protractor_1.by.buttonText('Login')).click();
    }));
    Then(/^Eu posso ver o nome "([^\"]*)"$/, (name) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element.all(protractor_1.by.id('welcome')).getText().then(text => text === name);
    }));
});
