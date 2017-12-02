Feature: Entrega
As a Fornecedor
I want to gerenciar a entrega
So that possa confirmar onde e se foi entregue o pedido feito pelo cliente.

Scenario: Confirmar entrega
Given o usuário “Diogo” fez a solicitação do pedido
When	o pedido for entregue ao usuário “Diogo”
Then o fornecedor confirmar a entrega no sistema

Scenario: Cancelar entrega
Given O usuário “Diogo” possui uma solicitação de pedido
When O usuário “Diogo” seleciona a opção de “cancelamento de pedido”
Then O pedido foi cancelado no sistema

Scenario: Gerar lista de entrega
Given Existam solicitações de pedidos cadastrados no sistema
When O fornecedor  escolher a opção de “Gerar Lista de Entrega”
Then Uma lista de entrega é gerada

Scenario: Erro ao entregar
Given O pedido foi enviado para entrega
When O fornecedor não consegue fazer a entrega
Then O pedido não é entregue
And o fornecedor atualiza o status do pedido para “erro”
