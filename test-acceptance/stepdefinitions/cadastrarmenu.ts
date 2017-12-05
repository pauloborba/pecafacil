import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^O usuario esta na pagina de pratos$/, async () => {
        await browser.get("http://localhost:4200/login");
        await $("input[name='login']").sendKeys(<string> "abc");
        await $("input[name='senha']").sendKeys(<string> "123");
        await element(by.buttonText('Login')).click();
        await sleep(1000);
        await browser.get("http://localhost:4200/pratos");
        await expect($('#titulo').getText()).to.eventually.equal('Pratos');
    });

    When(/^O fornecedor solicita o cadastro do prato "([^\"]*)" com a descrição "([^\"]*)" com o item "([^\"]*)" com o tamanho de "([^\"]*)"$/, async (nome, descricao,item,tamanho) => {
        await $("input[id='nome']").sendKeys(<string> nome);
        await $("input[id='descricao']").sendKeys(<string> descricao);
        await $("select[id='dropItem']").sendKeys(<string> item);
        await $("select[id='dropTam']").sendKeys(<string> tamanho);
        await element(by.id('adicionar')).click();
    });

    Then(/^O prato e visualizado numa tabela "([^\"]*)" com a descrição "([^\"]*)" com o item "([^\"]*)" com tamanho "([^\"]*)"$/, async (nome, descricao, item, tamanho) => {
        await $("table tr:nth-child(3) td:first-child").getText().then(text => text === nome);
    });
});