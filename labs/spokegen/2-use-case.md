---
id: use-case
title: "Caso de Uso"
pagination_label: "Caso de Uso"
sidebar_label: "Caso de Uso"
hide_table_of_contents: true
draft: false
---

A ACME Inc. atualmente utiliza um sistema de terceiros para gerenciar o acesso e a autorização de visitantes aos seus edifícios, que é supervisionado por uma empresa de Segurança e Gestão de Propriedades. A ACME Inc. visa melhorar a experiência tanto para visitantes quanto para funcionários. Eles utilizam o ServiceNow e pretendem automatizar o processo de verificação de acesso de visitantes e impressão de crachás através de fluxos de trabalho no ServiceNow. A ACME Inc. desenvolveu uma experiência modernizada usando a plataforma ServiceNow, permitindo que os visitantes façam o check-in de forma independente através de quiosques localizados na recepção de cada edifício.

No entanto, não existem integrações pré-construídas disponíveis para o aplicativo de Acesso de Visitantes, que é hospedado e gerenciado externamente à Plataforma ServiceNow. Como desenvolvedores do ServiceNow, nossa tarefa é criar essa integração (Spoke) para que possamos recuperar informações desse sistema remoto através de um fluxo de trabalho acionado quando um visitante faz o check-in no quiosque.

Nesse cenário, você teve uma reunião com o administrador do aplicativo de acesso de visitantes de terceiros, que forneceu a seguinte documentação da API: [Link para Documentação da API](https://quentincloudsnow.github.io/userlookup/#/default/get_checkUser). Você pode clicar no link para entender como essa API funciona.

Essa API é relativamente simples. Como você pode observar, consiste em apenas um método de API, 'checkUser', e esse método requer três entradas:

| Campo        | Tipo      |
|--------------|-----------|
| firstname    | string    |
| lastname     | string    |
| dateofbirth  | YYYY-MM-DD|

Ao fornecer as informações do usuário, a API retornará uma mensagem indicando se um usuário existe ou não. Se o usuário existir, também fornecerá informações adicionais que você precisará utilizar dentro de um fluxo de trabalho no ServiceNow. Você pode consultar o exemplo de resposta retornado pela API para esclarecimento:

```json
{
  "code": "0",
  "message": "User exists",
  "user": {
    "guest_title": "Guest",
    "phone": "123-456-7890",
    "host_name": "Jane Smith",
    "host_id_number": "987654",
    "host_email": "jane@example.com",
    "guest_email": "john@example.com",
    "building_location": "Building A",
    "access_expiration": "2023-12-31"
  }
}
