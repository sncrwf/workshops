---
id: deployment-request
title: 7. Requisição de Deploy
sidebar_position: 7
---
# Exercício: Request Deployment

##### Tempo Estimado de Conclusão: 5 minutos

## Overview

Sydney clicará no botão **Submit** no AES, o que acionará a criação de uma solicitação de Deployment no AEMC na instância Prod.

## Instructions

:::warning
Complete esta seção em **DEV**.
:::

1. Faça login em **Dev**.

2. No canto superior direito, clique no ícone do avatar do usuário » **Impersonate another user**.

![relative](/img/lab-aemc/2023-07-11-21-59-51.png)

3. Digite **Sydney Carter** e clique em **Sydney Carter** nos resultados da pesquisa.

![relative](/img/lab-aemc/2023-03-14-12-34-01.png)

4. Clique em **Impersonate User**.

![relative](/img/lab-aemc/2023-03-14-12-34-24.png)

5. Clique em **All** » digite ```app engine``` » clique em **App Engine Studio**

![relative](/img/lab-aemc/2023-07-11-17-18-49.png)

:::caution
Isso abrirá o AES em uma nova aba do navegador.
:::

6. Clique no tile **IT Time Off Request**.

![relative](/img/lab-aemc/2023-07-11-22-01-34.png)

:::caution
Se o botão **Submit** estiver desativado na próxima etapa, tente atualizar a página.
:::

7. Clique em **Submit**.

![relative](/img/lab-aemc/2023-03-14-13-21-30.png)

8. Clique em **Submit** na janela pop-up.

![relative](/img/lab-aemc/2023-03-14-13-22-52.png)

9. Role para baixo.

10. No campo **Release notes**, digite **Created from template**.

![relative](/img/lab-aemc/2023-03-14-13-23-47.png)

11. Clique em **Continue**.

![relative](/img/lab-aemc/2023-03-14-13-24-23.png)

![relative](/img/lab-aemc/2023-03-14-13-24-30.png)

12. Clique em **Close** no canto inferior direito.

![relative](/img/lab-aemc/2023-03-14-13-24-49.png)

![relative](/img/lab-aemc/2023-03-14-13-25-53.png)

Sydney recebe um e-mail informando que sua Solicitação de Deployment foi submetida.

:::info
**SUBJECT:** IT Time Off Request is being reviewed by your admin

![relative](/img/lab-aemc/2023-07-11-22-05-08.png)
:::

## Lições Aprendidas

Sydney conseguiu construir um aplicativo e enviar uma solicitação para implantá-lo. Ela não precisou aprender sobre Update Sets.

Ela pode continuar editando o aplicativo, mas não será capaz de enviar uma nova solicitação de deployment até que a atual seja resolvida.
