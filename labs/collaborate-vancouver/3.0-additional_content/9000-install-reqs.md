---
id: install-reqs
title: Requisitos de Instalação
hide_table_of_contents: true
---

# Requisitos de Instalação

## Como instalar o App Engine Studio?

O App Engine Management Center está disponível apenas em instâncias do ServiceNow que adquiriram licenciamento stand-alone do App Engine.

Isso inclui instâncias de Produção e Subprodução, mas não se estende a Instâncias de Desenvolvedor Pessoais (PDIs).

Portanto, este Laboratório é ideal para treinamento e aprendizado exploratórios.

## Optar e gerenciar direitos

Antes de instalar a aplicação a partir da ServiceNow Store, verifique se a instância possui direitos válidos do ServiceNow.

Na ServiceNow Store, use os critérios de busca para encontrar o App Engine Studio.

![relative](/img/lab-aemc/2023-07-07-16-19-09.png)

Clique em **Opt-in** e concorde com os termos e condições do ServiceNow para verificar os direitos.

Clique em **Gerenciar Direitos** e defina o valor de ‘Tipo de Direito’ para **Conceder a todas as Instâncias** (se preferir selecionar manualmente quais instâncias serão afetadas, selecione Conceder a Instâncias Selecionadas).

## Instalar a aplicação App Engine Studio

Para instalar a aplicação App Engine Studio (***com.snc.app-engine-studio***), faça login em sua instância de **desenvolvimento** e navegue para **Aplicações do Sistema** >> **Todas as Aplicações Disponíveis** >> **Todas**.

Use os critérios de busca para encontrar a aplicação App Engine Studio. Clique em **Instalar / Atualizar Tudo**.

![relative](/img/lab-aemc/2023-07-07-16-19-46.png)

O pacote do App Engine Studio será instalado na instância de desenvolvimento – incluindo a aplicação App Engine Studio e todas as aplicações dependentes.

Repita esse processo em todas as instâncias para fins de clonagem.

:::note
Para mais informações, veja
- **[Documentação do Produto: Instalar o App Engine Studio](https://docs.servicenow.com/csh?topicname=install-aes.html)**
- **[ServiceNow Store: Instalar um Produto ServiceNow](https://store.servicenow.com/%24appstore.do%23!/store/help?article=KB0030186)**
:::
