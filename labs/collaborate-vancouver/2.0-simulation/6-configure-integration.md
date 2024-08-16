---
id: configure-integration
title: 6. Configurar Integração
sidebar_position: 6
---
# Exercício: Configurar Integração

##### Tempo Estimado de Conclusão: 15 minutos

:::info
**ESTA SEÇÃO É OPCIONAL E PODE SER PULADA SE VOCÊ ESTIVER ATRASADO.**

Pular as etapas abaixo não impedirá você de concluir o laboratório.
:::

## Overview

Nesta seção, Priya irá para **Dev** e trabalhará no aplicativo de Sydney.

| Priya Bapat | Integration Specialist
|--|--
| ![relative](/img/lab-aemc/Priya.png) | Priya tem muitos anos de experiência em TI construindo integrações em várias plataformas. Ela recentemente concluiu um treinamento de Integração no ServiceNow e está pronta para ajudar Sydney.

Após Jayne aprovar a Solicitação de Colaboração, Priya recebeu um e-mail informando que ela agora é uma colaboradora no aplicativo.

:::info
**SUBJECT:** You are now a collaborator

![relative](/img/lab-aemc/2023-07-11-20-59-36.png)
:::

Quando Priya clica no botão do e-mail, ela é levada diretamente ao App Engine Studio em Dev; no entanto, simularemos isso.

## Instructions

:::warning
Complete esta seção em **DEV**.
:::

1. Faça login em **Dev**.

2. No canto superior direito, clique no ícone do avatar do usuário » **Impersonate another user**.

![relative](/img/lab-aemc/2023-07-11-20-50-38.png)

3. Digite **Priya** e clique em **Priya Bapat** nos resultados da pesquisa.

![relative](/img/lab-aemc/2023-07-11-20-56-14.png)

4. Clique em **Impersonate User**.

![relative](/img/lab-aemc/2023-03-14-12-34-24.png)

5. Clique em **All** » digite ```app engine``` » clique em **App Engine Studio**

![relative](/img/lab-aemc/2023-07-11-17-18-49.png)

:::caution
Isso abrirá o AES em uma nova aba do navegador.
:::

6. Clique em **My Apps**

![relative](/img/lab-aemc/2023-07-11-21-26-37.png)

7. Clique no aplicativo **IT Time Off Request**

![relative](/img/lab-aemc/2023-07-11-21-27-20.png)

8. Note algumas das diferenças na experiência de Priya em comparação com a de Sydney. Ela não tem acesso ao botão **Submit** para solicitar a implantação do aplicativo. Ela também não pode ver ou modificar nenhuma das **Experiences** no aplicativo.

![relative](/img/lab-aemc/2023-07-11-21-29-13.png)

9. Role para baixo e clique em **+Add** ao lado de **Logic and Automation**.

![relative](/img/lab-aemc/2023-07-11-21-31-14.png)

10. Clique em **Flow**

![relative](/img/lab-aemc/2023-07-11-21-31-35.png)

11. Clique em **Build from scratch**

![relative](/img/lab-aemc/2023-07-11-21-31-59.png)

12. Digite ```Send data to Workday``` no campo **Name** e clique em **Continue**

![relative](/img/lab-aemc/2023-07-11-21-34-10.png)

![relative](/img/lab-aemc/2023-07-11-21-34-43.png)

13. Clique em **Edit this flow**

![relative](/img/lab-aemc/2023-07-11-21-35-23.png)

14. Clique em **Add a trigger**

![relative](/img/lab-aemc/2023-07-11-21-36-31.png)

15. Clique em **Updated**

![relative](/img/lab-aemc/2023-07-11-21-37-01.png)

16. No campo **Table**, digite ```time off``` e clique na tabela **Time Off Request**.

![relative](/img/lab-aemc/2023-07-11-21-37-53.png)

17. Clique em **Add filters** ao lado de **Condition**

![relative](/img/lab-aemc/2023-07-11-21-45-26.png)

18. Configure uma condição de **Active changes to false**

![relative](/img/lab-aemc/2023-07-11-21-47-04.png)

19. Clique em **Done**

![relative](/img/lab-aemc/2023-07-11-21-38-16.png)

20. Clique em **Add an Action, Flow Logic, or Subflow**

![relative](/img/lab-aemc/2023-07-11-21-38-51.png)

21. Clique em **Action** >> digite ```log``` >> clique em **Log**

![relative](/img/lab-aemc/2023-07-11-21-43-05.png)

22. Digite algo no campo **Message** e clique em **Done**

![relative](/img/lab-aemc/2023-07-11-21-44-16.png)

23. Clique em **Save** no canto superior direito

![relative](/img/lab-aemc/2023-07-11-21-44-55.png)

![relative](/img/lab-aemc/2023-07-11-21-47-29.png)

24. Clique em **Activate** >> **Activate**

![relative](/img/lab-aemc/2023-07-11-21-48-02.png)

![relative](/img/lab-aemc/2023-07-11-21-48-50.png)

25. Clique na aba do navegador do **App Engine Studio** e retorne à visualização da plataforma **Dev**.

![relative](/img/lab-aemc/2023-07-11-21-52-42.png)

## Lições Aprendidas

Priya construiu uma integração no aplicativo. É simplista para o laboratório, mas em um cenário real, ela construiria uma integração mais complexa para Sydney.

O aplicativo agora está pronto para Sydney solicitar sua implantação.
