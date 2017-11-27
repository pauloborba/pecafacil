Feature: Cadastro
As a usuário do sistema Peça Fácil
I want to cadastrar meu usuário no sistema
So that eu possa acessar e usufruir das funcionalidades do sistema 

Scenario: Cadastro do cliente
Given o usuário está na pagina inicial do sistema
And o sistema não possui armazenado o CPF “11111111111” 
When o usuário com nome “Diogo” com o número de CPF “1111111111”  com telefone “99999999” solicita cadastro no sistema
Then o usuário “Diogo” com o número de CPF “11111111111” com telefone “999999999” é armazenado no sistema
And uma mensagem de sucesso é mostrada na tela

Scenario: Cadastro do fornecedor
Given o usuário está na pagina incial do sistema
And o sistema não possui armazenado o CNPJ “2222222222”
When o usuário com razão social  “Bar da Deda” com o CNPJ “22222222222” com telefone “8888888” solicita cadastro no sistema
Then o usuário “Bar da Deda” com o número de CNPJ “22222222222” com telefone “888888888”  é armazenado no sistema
And uma mensagem de sucesso é mostrada na tela

Scenario: Erro do cadastro do cliente 
Given o usuário está na página inicial do sistema
And o usuário “Diogo” está armazenado no sistema com o CPF “11111111111”
When o usuário “Diogo” solicita cadastro no sistema com o número de CPF “1111111111”  
Then o usuário "Diogo" com o CPF "11111111111" não é armazenado duas vezes no sistema
And uma mensagem de erro é mostrada na tela

Scenario: Erro do cadastro do fornecedor
Given o usuário está na pagina inicial do sistema 
And o usuário com razão social “Bar da Deda” está armazenado no sistema com o CNPJ “22222222222”
When o usuário com razão social “Bar da Deda” solicita cadastro no sistema com o número de CNPJ “22222222222”
Then o usuário "Bar da Deda" com o CNPJ "22222222222" não é armazenado duas vezes no sistema
And uma mensagem de erro é mostrada na tela
