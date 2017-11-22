Feature: Cadastrar Menu
As a Fornecedor
I want to cadastrar o menu 
So that os clientes possam escolher os pratos do menu

Scenario: Cadastro de pratos
Given O sistema não possui armazenado o prato “quentinha tradicional”
When O fornecedor solicita o cadastro do prato “quentinha tradicional” com a descrição “feijão, arroz, macarrão, farofa e bife acebolado” com o número de porções diária “10”
Then O sistema armazena o prato “quentinha tradicional” com a descrição “feijão, arroz, macarrão, farofa e bife acebolado” com número de porções diária “10” 

Scenario: Erro do cadastro de pratos
Given O sistema possui armazenado o prato “quentinha tradicional”
When O fornecedor tenta cadastrar o prato “quentinha tradicional” com a descrição “feijão, arroz, macarrão, farofa e bife acebolado” com o número de porções diária “10”
Then O sistema não armazena o prato “quentinha tradicional”

Scenario: Editar pratos
Given o prato “quentinha tradicional” está armazenado no sistema
And  o prato “quentinha tradicional” possui uma descrição “feijão, arroz, macarrão, farofa e bife acebolado”
When O fornecedor adiciona “fritas” à descrição do prato “quentinha tradicional” 
Then os dados do prato “quentinha tradicional” são alterados
And armazenados pelo sistema

Scenario: Remover prato
Given O sistema possui o prato “quentinha tradicional”
When O fornecedor solicita a remoção do prato “quentinha tradicional” no menu 
Then O prato “quentinha tradicional” é removido do sistema

