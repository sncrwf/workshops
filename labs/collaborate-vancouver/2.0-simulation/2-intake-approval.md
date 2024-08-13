---
id: intake-approval
title: 2. Aprovação de Intake
sidebar_position: 2
---
# Exercício: Aprovação de Intake

##### Tempo Estimado de Conclusão: 10 minutos

## Overview

<details>
  <summary><strong>App Engine Admin</strong></summary>
  Alguém que tem responsabilidades administrativas para configurar e gerenciar aplicativos do App Engine no ServiceNow. Um App Engine Admin supervisiona o deploy, escalonamento e manutenção dos aplicativos, garantindo desempenho e disponibilidade ideais.
</details>

| Jayne Nigel| App Engine Admin
|--|--|
| ![](/img/lab-aemc/2023-08-30-15-42-07.png) | Jayne está familiarizada com muitas metodologias de software, como Agile e SAFe. Ela conhece os Update Sets de seu treinamento no ServiceNow, mas não trabalha regularmente com eles.

Nesta seção, nossa **App Engine Admin** Jayne revisará e aprovará a solicitação de Intake de Sydney.

## Instructions

:::warning
Complete esta seção em **PROD**.
:::

1. Faça login em **Prod**.

2. Clique no avatar no canto superior direito e, em seguida, clique em **Impersonate another user**.

![relative](/img/lab-aemc/2023-03-14-12-44-50.png)

3. Digite **Jayne Nigel** e clique em **Jayne Nigel**.

![relative](/img/lab-aemc/2023-03-14-12-45-21.png)

4. Clique em **Impersonate user**.

5. Clique em **All** >> digite **app engine management** >> clique em **App Engine Management Center**.

![relative](/img/lab-aemc/2023-07-05-16-16-55.png)

:::caution
Isso abrirá o AEMC em uma nova aba do navegador.
:::

6. No widget **Pending requests to complete**, clique no número **1** acima de **Intake** para abrir a solicitação de Sydney.

![relative](/img/lab-aemc/2023-07-11-16-34-50.png)

7. Clique no número **RITM** para abrir a solicitação de Sydney.

![relative](/img/lab-aemc/2023-07-11-16-36-33.png)

8. Role para baixo no lado esquerdo da página na seção **Details**.

![relative](/img/lab-aemc/2023-07-11-16-39-06.png)

9. Na seção **Administration** do formulário, clique no campo suspenso **Permission type**.

![relative](/img/lab-aemc/2023-07-11-16-42-31.png)

10. Clique em **Create/edit applications (AES User Group)**

![relative](/img/lab-aemc/2023-07-11-16-44-56.png)

11. Role para o topo da página e clique em **Save** no canto superior direito.

![relative](/img/lab-aemc/2023-07-11-16-46-15.png)

12. Clique na lista relacionada **Catalog Tasks (1)**.

![relative](/img/lab-aemc/2023-07-11-16-47-20.png)

13. Clique no número **SCTASK** para abrir a Tarefa de Catálogo.

![relative](/img/lab-aemc/2023-07-11-16-47-55.png)

14. Clique em **Close Task** no canto superior direito.

![relative](/img/lab-aemc/2023-07-11-16-49-14.png)

15. Clique no ícone **ⓘ** ao lado do número **RITM** para voltar ao registro **RITM**.

![relative](/img/lab-aemc/2023-07-11-16-54-30.png)

:::caution
Se você não vir o botão **Approve** na próxima etapa, pode ser necessário atualizar a página.
:::

16. Clique em **Approve** no canto superior direito da página.

![relative](/img/lab-aemc/2023-07-11-16-56-47.png)

![relative](/img/lab-aemc/2023-07-11-17-01-13.png)

A instância Prod configurará o acesso de Sydney ao App Engine no ambiente Dev.

No mundo real, pode haver mais de uma pessoa para fazer a aprovação e mais tempo pode ser necessário para revisar as respostas.

Você também pode querer exigir que a pessoa passe por um treinamento adicional antes de aprovar seu acesso para criar aplicativos.

## Lições Aprendidas

Durante nossa jornada pelo processo 'Intake - Approval', surgiram vários insights úteis para futuras referências:

**Clarificação de Papéis**

O processo destacou o papel crítico que Jayne, a App Engine Admin, desempenha dentro do sistema. Suas funções, embora não rotuladas como 'Platform Administrator' ou atribuídas a qualquer papel 'admin' em qualquer ambiente, são amplas. Suas aprovações iniciam uma sequência de procedimentos automatizados que são cruciais para o funcionamento suave do sistema. Isso serve como um lembrete de que todos os papéis, independentemente dos títulos, têm responsabilidades e impactos significativos.

**Processo de Aprovação**

O impacto do processo de aprovação nas ações subsequentes (como acionar um e-mail automático para Sydney) foi um aprendizado essencial. Isso demonstra o poder dos fluxos de trabalho automatizados em economizar tempo e reduzir erros manuais.

**Segregação de Funções**

Concluir com sucesso este processo sem que Jayne precise de um papel 'admin' demonstra o princípio da 'Segregação de Funções'. Isso ilustra que o acesso de alto nível (como o papel de 'admin') nem sempre é necessário para concluir tarefas significativas. Isso reduz riscos potenciais de segurança e promove a integridade do sistema.
