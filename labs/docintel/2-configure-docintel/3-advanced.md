---
id: 3-advanced
title: 2.3 Adicionar Flows para processamento avançado
hide_table_of_contents: true
draft: false
---

:::danger
DESAFIO: Agora é hora de testar seus conhecimentos
:::

## Crie um Flow que processe o valor no campo Customer.

- Crie um Flow que seja acionado ao atualizar a tarefa de Fatura quando o campo **Customer** for alterado.
- O Flow busca o registro na tabela **Company** com o valor do campo **Customer** e recupera o primeiro registro. Em seguida, atualiza a tarefa de Fatura: o campo **Company** é atualizado com o registro da tabela **Company**.
- Se não houver nenhum registro correspondente ao nome do cliente, o Flow cria uma aprovação. Se aprovado, o Flow cria o registro na tabela **Company**.

Com o **Document Intelligence** configurado, podemos processar o fluxo de ponta a ponta.
