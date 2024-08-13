---
id: collaboration
title: 3. Collaboration Descriptors
hide_table_of_contents: true
draft: false
---
# Exercício: Collaboration Descriptors

##### Tempo Estimado de Conclusão: 10 minutos

## Overview

Pessoas com privilégios de administrador podem gerenciar as permissões dos desenvolvedores que colaboram em uma aplicação.

Você pode usar os **<a href="https://docs.servicenow.com/csh?topicname=create-collaboration-descriptors.html&version=latest" target="_blank">Collaboration Descriptors ↗</a>** pré-definidos que são padrão com a ativação ou criar um descriptor de colaboração personalizado.

Ao usar um collaboration descriptor, você pode atribuir, gerenciar e monitorar permissões de desenvolvimento delegadas.

Usaremos collaboration descriptors durante os exercícios de simulação.

| **Descriptors** | **Description**
|--|--
| Owner	| Proprietário da aplicação que gerencia outros colaboradores e pode excluir a aplicação.
| Editor | Descriptor padrão para convidar colaboradores.
| Integration Specialist | Descriptor não padrão (personalizado) criado pelo usuário.

:::info
**Integration Specialist** é um **<a href="https://docs.servicenow.com/csh?topicname=create-collaboration-descriptors.html&version=latest" target="_blank">Collaboration Descriptor ↗</a>** personalizado criado para este laboratório.
:::

## Instructions

:::caution
Para este exercício, o Escopo da Aplicação é **crítico** - Collaboration Descriptors devem ser criados no Global.
:::

:::warning
Complete esta seção em **DEV**.
:::

1. Faça login em **DEV**.


2. Clique em **All** >> digite **descriptor** >> clique em **Descriptors**.

![relative](/img/lab-aemc/2023-08-01-22-32-53.png)

3. Clique em **New**.

![relative](/img/lab-aemc/2023-08-01-22-33-57.png)

4. No campo **Name**, digite 'Pro Developer' e clique em **Submit**.

![relative](/img/lab-aemc/2023-08-01-22-35-31.png)

5. Clique no registro **Pro Developer** para abri-lo.

![relative](/img/lab-aemc/2023-08-01-22-36-38.png)

6. Clique em **Edit**.

![relative](/img/lab-aemc/2023-08-01-22-37-30.png)

7. Clique em **All Metadata**.

![relative](/img/lab-aemc/2023-08-01-22-38-19.png)

8. Role para baixo, segure SHIFT e clique em **Workflow**.

![relative](/img/lab-aemc/2023-08-01-22-39-00.png)

9. Clique no botão **>** para mover os papéis para o lado direito da lista e clique em **Save**.

![relative](/img/lab-aemc/2023-08-01-22-39-54.png)

![relative](/img/lab-aemc/2023-08-01-22-40-25.png)

![relative](/img/lab-aemc/2023-08-01-22-41-50.png)

## Lições Aprendidas

Aqui estão algumas lições importantes deste exercício:

**Papel dos Collaboration Descriptors**

Collaboration descriptors desempenham um papel crítico na atribuição, gerenciamento e monitoramento de permissões de desenvolvimento delegadas para cada aplicação ou uniformemente em várias aplicações. Portanto, criar descritores apropriados é essencial para garantir uma delegação eficiente de permissões.

**Foco no Escopo Global e Padrão**

É crucial criar collaboration descriptors no escopo global e defini-los como padrão para que eles sejam visíveis e utilizáveis no AES. Qualquer desvio dessa diretriz pode levar à não visibilidade ou não usabilidade dos collaboration descriptors no AES.

**Utilidade dos Descritores de Colaboração Personalizados**

O processo permite a criação de collaboration descriptors personalizados que atendem a necessidades específicas além dos descritores pré-definidos que vêm com a ativação. Esta flexibilidade permite uma delegação de permissões mais precisa dependendo dos papéis e requisitos dos usuários e grupos.
