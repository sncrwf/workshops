---
id: 2-flow
title: 2.2 Configurar Flows para Document Intelligence
hide_table_of_contents: true
draft: false
---

Com o caso de uso aberto na página de administração do **Document Intelligence**:

1. Crie o Flow para criar uma nova tarefa de Documento a partir de uma tarefa de Fatura:
   - Na aba **Integrations**, selecione **Set up your first integration**.

    ![](../images/2024-08-23-14-33-00.png)

   - Preencha o formulário para criar a integração de Process Task:

    | Campo                       | Valor                         |
    |-----------------------------|-------------------------------|
    | **Name your Integration:**  | Process Invoice Task          |
    | **What type of integrations you want to set?** | Process Task |
    | **Condition:**              | Leave blank                   |
    | **Create Flow:**            | Checked (True)                |

    ![](../images/2024-08-23-14-33-17.png)
   - Clique em **Save**.
   - Abra no **Flow Designer** (clicando no valor na coluna **Flow**).

    ![](../images/2024-08-23-14-33-35.png)  

    :::info
    **Verificação de Conhecimento:** Revise o gatilho do Flow e as Ações: Uma tarefa de Documento será criada quando uma tarefa de Fatura for criada? Como elas estão relacionadas?
    :::
   - Ative o Flow. Em seguida, feche a aba do navegador.

    ![](../images/2024-08-23-14-36-47.png)

2. Crie o Flow que preenche os campos da tarefa de Fatura uma vez que a tarefa de Documento é concluída:
   - Clique em **New integration**.
    ![](../images/2024-08-23-14-37-30.png)
   - Preencha o formulário para criar a integração de **Extract Values**:

    | Campo                       | Valor                         |
    |-----------------------------|-------------------------------|
    | **Name your Integration:**  | Extract Invoice Task          |
    | **What type of integrations you want to set?** | Extract Values |
    | **Create Flow:**            | Checked (True)                |

    ![](../images/2024-08-23-14-37-45.png)
   - Clique em **Save**.
   - Abra no **Flow Designer** (selecionando o valor na coluna **Flow**).
    ![](../images/2024-08-23-14-37-59.png)
    :::info
    **Verificação de Conhecimento:** Revise o gatilho do Flow e as Ações: Nosso registro de Fatura será atualizado quando uma tarefa de Documento for concluída?
    :::
   - Ative o Flow. Em seguida, feche a aba do navegador.
    ![](../images/2024-08-23-14-38-26.png)

## Verificação do Lab

Usando a outra aba do navegador (no início do Lab 2, abrimos uma nova aba do navegador para configurar o **Document Intelligence**), no menu de navegação, abra o menu **Invoice Tasks**. 

![](../images/2024-08-23-14-38-55.png)

Crie uma nova tarefa de Fatura (clique em **New**). Anexe um dos PDFs que você baixou no início deste laboratório. Clique em **Submit**.

![](../images/2024-08-23-14-39-07.png)

- Observe o Número, neste exemplo `INVTASK0001001`. 
:::note 
Você pode ter um número diferente em sua instância.
:::
- Retorne à aba do navegador com a administração do **Document Intelligence** e atualize a página.
- **Verifique as Ações:** Verifique se foi criada uma nova tarefa de Documento. No campo **Source Record**, você deve ver o número da tarefa de Fatura.

Abra a tarefa de documento e selecione **Open in Document Intelligence**.

![](../images/2024-08-23-14-40-04.png)
![](../images/2024-08-23-14-40-14.png)

## Verifique as Ações

:::info
1 - Caso o document intelligence apresente a mensagem: `We recommend you wait until the task is ready and DocIntel suggestions are available.` Quer dizer que o documento ainda está sendo processado.

2 - Clique em `No, I can wait` e aguarde o processamento finalizar. 

![](../images/2025-01-28-12-03-38.png)

3 - Clique em `Refresh` para atualizar o processamento até que o processo seja concluído:
![](../images/2025-01-28-12-05-18.png)
:::

Agora iremos verificar os campos. 

1. Comece a digitar o valor a ser extraído e observe as sugestões com um nível de confiança (0%). 
2. Clique em uma sugestão para selecioná-la como o valor a ser extraído.

    ![](../images/2024-08-23-14-40-28.png)

3. Comece a digitar o valor a ser extraído e observe as sugestões com um nível de confiança (0%). Clique em uma sugestão para selecioná-la como o valor a ser extraído.

    ![](../images/2024-08-23-14-41-42.png)

4. Para mapear os campos da tabela. clique no ícone ao lado de **Line Item** para expandir.
   ![](../images/2025-01-29-10-23-50.png)

5. Digite os valores conforme a ordem exibida.
   ![](../images/2025-01-29-10-24-49.png)

6. Ao finalizar todos os campos, clique em **Submit**
    :::info
    Perceba que os campos ao serem concluídos são marcados com ícone verde, indicando que foram completados.
    :::
    ![](../images/2025-01-29-10-26-09.png)

    - Feche a aba do navegador.

7. Retorne para a workspace do DocIntel e clique em **Save**
   ![](../images/2025-01-29-10-29-30.png)

8. Verifique o status foi alterado para **Done**
   ![](../images/2025-01-29-10-30-10.png)

9. Retorne para a Invoice Task `INVTASK0001001` criada anteriormente. Veja que os campos foram preenchidos com os valores extraídos.
    ![](../images/2025-01-29-10-32-59.png)

:::info
As sugestões são geradas de forma assíncrona, e pode levar alguns minutos para que o processamento ocorra.
:::

:::info
Caso o processamento não seja concluído, usaremos uma solução alternativa no Lab 3.
:::
