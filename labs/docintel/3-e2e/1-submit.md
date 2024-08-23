---
id: 1-submit
title: 3.1 Enviar como solicitante e processar um documento
hide_table_of_contents: true
draft: false
---

1. Envie uma solicitação para o processamento de fatura:
   - Impersonate Rick Ester (Invoice Requester).
   - Navegue para **Invoice Lab > Submit an invoice** para acessar o Record Producer.
    ![](../images/2024-08-23-14-45-43.png)
   - Anexe um arquivo e envie. Após ser redirecionado para o registro, observe que os campos da fatura estão vazios e não há itens de linha de fatura.
    ![](../images/2024-08-23-14-45-54.png)
    ![](../images/2024-08-23-14-45-59.png)

   - Navegue para **Invoice Lab > Invoice Tasks**, estas são as solicitações que criamos anteriormente que estão prontas para processamento.
   - Abra `INVTASK0001012` e verifique se todos os campos estão vazios.

2. Atenda à solicitação:
   - Impersonate AJ Jent.
   - Navegue para **Document Intelligence > Document Tasks** e abra o registro com **Source Record** = `INVTASK0001012`.
   - Selecione **Show In DocIntel**.
   - Prossiga com a extração, observe o nível de confiança. Envie. Feche a aba do navegador.
   - Recarregue o formulário. Abra o **Source Record**.

## Verificação do Lab 

Verifique se os valores extraídos foram copiados para a tarefa.

![](../images/2024-08-23-14-46-48.png)
