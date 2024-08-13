---
id: deployment-approval
title: 8. Deployment Approval
sidebar_position: 8
---
# Exercício: Approve and Deploy Sydney's App

##### Tempo Estimado de Conclusão: 15 minutos

## Overview

Quando Sydney submeteu a Solicitação de Deployment no App Engine Studio, isso acionou um e-mail para Jayne solicitando que ela tomasse uma ação.

:::info
**SUBJECT:** Deployment Request DEP0010002 Approval Request

![relative](/img/lab-aemc/2023-07-11-22-07-39.png)
:::

:::caution
Você deve ainda ter uma aba do navegador aberta para **Prod** no App Engine Management Center, onde você está se passando por Jayne.
 
Caso contrário, siga estas instruções rápidas para garantir:
 
1. Clique no avatar no canto superior direito e depois clique em **Impersonate another user**.
 
2. Digite **Jayne Nigel** e clique em **Jayne Nigel**.
 
3. Clique em **Impersonate user**.
 
4. Clique em **All** >> digite **app engine management** >> clique em **App Engine Management Center**.
 
Isso abrirá o AEMC em uma nova aba do navegador.
:::

## Instructions

:::warning
>Esta seção deve ser completada na sua instância **Production** onde o AEMC está rodando. Essa é sua instância controladora.
:::

1. Clique no **1** acima de **Deployment**.

![relative](/img/lab-aemc/2023-07-11-22-12-55.png)

2. Clique no ticket **DEP** para abrir a Solicitação de Deployment de Sydney.

![relative](/img/lab-aemc/2023-07-11-22-15-03.png)

3. Clique em **Approve** no canto superior direito da página.

![relative](/img/lab-aemc/2023-07-11-16-56-47.png)

![relative](/img/lab-aemc/2023-07-11-17-01-13.png)

4. Para verificar o status do Deployment... Clique na lista relacionada **Deployment Environment R..**

![relative](/img/lab-aemc/2023-07-11-22-17-50.png)

5. Clique ocasionalmente no botão **Refresh** para verificar o progresso. Assim que o app for implantado no ambiente Prod, um registro aparecerá aqui.

![relative](/img/lab-aemc/2023-07-11-22-18-45.png)

:::caution
Este é um bom momento para fazer uma pausa de cinco minutos ou esticar as pernas. Pode levar vários minutos ou mais para que o app seja implantado no próximo ambiente.
:::

6. Eventualmente, você verá um registro aparecer para o seu deployment.

![relative](/img/lab-aemc/2023-07-11-22-20-02.png)

Se **Has Error** for **false**, então o app foi implantado com sucesso no próximo ambiente.

## ***Como Jayne pode confirmar se o app foi realmente implantado?***

:::caution
Como parte da configuração automatizada para sua instância de laboratório, Jayne recebeu o papel ```sn_appclient.app_client_company_installer```.
 
Este é um papel base da Plataforma que existe há muitos anos e permite que um usuário não administrador veja aplicativos em My Company Applications.
 
Para mais informações, veja **[Product Docs: Instance-specific deployment user roles](https://docs.servicenow.com/csh?topicname=delegated_deployment_user_roles.html&version=latest)**
:::

17. Clique em **All** >> digite 'My Company Applications' >> Clique em **My Company Applications**.

![relative](/img/lab-aemc/2023-07-11-22-22-05.png)

:::caution
My Company Applications mostra os aplicativos que foram publicados no repositório da sua empresa, bem como o que está instalado na sua instância atual.
 
Para mais informações, veja **[Product docs: ServiceNow application repository](https://docs.servicenow.com/csh?topicname=app-repo.html&version=latest)**
:::

20. Clique na aba **Installed**.
*Se o app não aparecer na lista, aguarde alguns minutos para atualizar. Há um ícone no canto superior direito que parará de girar quando a página terminar de carregar.*

![relative](/img/lab-aemc/2023-07-11-22-23-47.png)

![relative](/img/lab-aemc/2023-07-12-08-29-21.png)

## Lições Aprendidas

Você conseguiu!! Você implantou um app com um clique de botão!

Isso completa o Lab de Governança do App Engine!
