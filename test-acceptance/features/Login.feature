Feature: Login
As a Usuario
I want to entrar no sistema
So that os usuarios possam utilizar o sistema

Scenario: Logar com sucesso
Given O sistema possui armazenado o usuario com login "diogo" e senha "123"
When O usario tenta efetuar o login com o login "diogo" e senha "123"
Then O usuario conseguiu realizar o login

Scenario: Erro ao logar
Given O sistema não possui armazenado o usuario com login "diogo" e senha "123"
When O fornecedor tenta cadastrar o prato “quentinha tradicional” com a descrição “feijão, arroz, macarrão, farofa e bife acebolado” com o número de porções diária “10”
Then O usuario não conseguiu realizar o login

Scenario: Logar com sucesso GUI
Given Eu estou na pagina de login
When Eu tento logar com login "abc" e senha "123"
Then Eu posso ver o nome "ze"