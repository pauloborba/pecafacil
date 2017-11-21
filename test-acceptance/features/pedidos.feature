Feature: Pedido do cliente
As a um cliente do sistema Peça Fácil
I want to poder realizar pedidos de comida, modificá-los e cancelar quando for possível
That so eu possa gerenciar os pedidos e comprar somente o que eu desejar

Scenario: Escolher o pedido
Given o usuário “Diogo” está cadastrado no sistema 
When “Diogo” seleciona o fornecedor “Bar da Deda” 
And seleciona o prato “quentinha tradicional”
Then O pedido do usuário “Diogo” é confirmado no sistema

Scenario: Modificar pedido
Given o usuário “Diogo” está cadastrado no sistema
And o pedido “quentinha tradicional” solicitado por “Diogo” está registrado no sistema 
When o usuário “Diogo” altera o prato “quentinha tradicional” para “quentinha nordestina”
Then o sistema armazena altera o prato para “quentinha nordestina” do usuário “Diogo”

Scenario: Cancelar pedido
Given O usuário “Diogo” está cadastrado no sistema
And o pedido “quentinha nordestina” solicitado por “Diogo” está registrado no sistema
When O usuário “Diogo”  solicita o cancelamento do pedido da “quentinha nordestina”
Then o pedido é cancelado no sistema

Scenario: Erro de solicitação de pedido
Given o prato “quentinha tradicional” está com número de porções diárias zerado 
When o usuário “Diogo” seleciona o prato “quentinha tradicional”
Then O sistema mostra uma mensagem de erro na solicitação
