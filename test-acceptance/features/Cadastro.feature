Feature: Cadastro
As a usu�rio do sistema Pe�a F�cil
I want to cadastrar meu usu�rio no sistema
So that eu possa acessar e usufruir das funcionalidades do sistema 

Scenario: Cadastro do cliente
Given o usu�rio est� na pagina inicial do sistema
And o sistema n�o possui armazenado o CPF �11111111111� 
When o usu�rio com nome �Diogo� com o n�mero de CPF �1111111111�  com telefone �99999999� solicita cadastro no sistema
Then o usu�rio �Diogo� com o n�mero de CPF �11111111111� com telefone �999999999� � armazenado no sistema
And uma mensagem de sucesso � mostrada na tela

Scenario: Cadastro do fornecedor
Given o usu�rio est� na pagina incial do sistema
And o sistema n�o possui armazenado o CNPJ �2222222222�
When o usu�rio com raz�o social  �Bar da Deda� com o CNPJ �22222222222� com telefone �8888888� solicita cadastro no sistema
Then o usu�rio �Bar da Deda� com o n�mero de CNPJ �22222222222� com telefone �888888888�  � armazenado no sistema
And uma mensagem de sucesso � mostrada na tela

Scenario: Erro do cadastro do cliente 
Given o usu�rio est� na p�gina inicial do sistema
And o usu�rio �Diogo� est� armazenado no sistema com o CPF �11111111111�
When o usu�rio �Diogo� solicita cadastro no sistema com o n�mero de CPF �1111111111�  
Then o usu�rio "Diogo" com o CPF "11111111111" n�o � armazenado duas vezes no sistema
And uma mensagem de erro � mostrada na tela

Scenario: Erro do cadastro do fornecedor
Given o usu�rio est� na pagina inicial do sistema 
And o usu�rio com raz�o social �Bar da Deda� est� armazenado no sistema com o CNPJ �22222222222�
When o usu�rio com raz�o social �Bar da Deda� solicita cadastro no sistema com o n�mero de CNPJ �22222222222�
Then o usu�rio "Bar da Deda" com o CNPJ "22222222222" n�o � armazenado duas vezes no sistema
And uma mensagem de erro � mostrada na tela
