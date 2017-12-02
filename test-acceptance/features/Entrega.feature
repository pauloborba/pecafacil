Feature: Entrega
As a Fornecedor
I want to gerenciar a entrega
So that possa confirmar onde e se foi entregue o pedido feito pelo cliente.

Scenario: Confirmar entrega
Given o usu�rio �Diogo� fez a solicita��o do pedido
When	o pedido for entregue ao usu�rio �Diogo�
Then o fornecedor confirmar a entrega no sistema

Scenario: Cancelar entrega
Given O usu�rio �Diogo� possui uma solicita��o de pedido
When O usu�rio �Diogo� seleciona a op��o de �cancelamento de pedido�
Then O pedido foi cancelado no sistema

Scenario: Gerar lista de entrega
Given Existam solicita��es de pedidos cadastrados no sistema
When O fornecedor  escolher a op��o de �Gerar Lista de Entrega�
Then Uma lista de entrega � gerada

Scenario: Erro ao entregar
Given O pedido foi enviado para entrega
When O fornecedor n�o consegue fazer a entrega
Then O pedido n�o � entregue
And o fornecedor atualiza o status do pedido para �erro�
