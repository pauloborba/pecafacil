import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu estou na pagina de login$/, async () => {
        await browser.get("http://localhost:4200/login");
        await expect(browser.getTitle()).to.eventually.equal('PecafacilGui');
    });

    When(/^Eu tento logar com login "([^\"]*)" e senha "([^\"]*)"$/, async (login, senha) => {
        await $("input[name='login']").sendKeys(<string> login);
        await $("input[name='senha']").sendKeys(<string> senha);
        await element(by.buttonText('Login')).click();
    });


    Then(/^Eu posso ver o nome "([^\"]*)"$/, async (name) => {
        await element.all(by.id('welcome')).getText().then(text => text === name);
    });
});