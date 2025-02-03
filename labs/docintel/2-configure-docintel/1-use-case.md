---
id: 1-use-case
title: 2.1 Configurar um caso de uso com Document Intelligence Admin
hide_table_of_contents: true
draft: false
---

1. Navegue para **Document Intelligence > Document Data Extraction Administration > Home**.

    ![](../images/2025-02-03-09-26-33.png)

   - Nota: A página será aberta em uma nova aba do navegador. Se isso não acontecer, verifique se o seu navegador não está bloqueando a abertura.
2. Vá para a aba **Use Cases** e selecione **Define your first use case**.

    ![](../images/2025-02-03-09-28-02.png)  

   - Preencha o formulário:

    | Campo                        | Valor                                      |
    |------------------------------|--------------------------------------------|
    | **Name**                     | Invoice                                    |
    | **Location for the extracted data** | `Invoice Task [x_snc_invoice_app_invoice_task]` |
    | **Language Model** | Default |

    ![](../images/2025-01-29-09-45-13.png)
   - Clique em **Save**.

3. Abra o Use Case na lista.
    ![](../images/2024-08-23-14-21-49.png)
    - Na aba **Fields**, selecione **Define your fields**.

    ![](../images/2024-08-23-14-22-02.png)

    - Selecione **Single field**
    ![](../images/2025-01-29-09-46-20.png)

4. Crie 4 campos (Date, Number, Customer, Total) conforme mostrado abaixo:
    :::tip
    Selecione a opção “Define multiple fields” para manter a janela pop-up aberta após cada campo ser adicionado.
    :::

    :::note
    Apesar de existirem tipos de dados diferentes (como Date), utilizaremos Text para todos os campos.
    :::
   
    | Field Name  | Field Type    | Target Field  |
    |-------------|---------------|---------------|
    | **Date**    | Text | `Invoice_date` |
    | **Number**  | Text | `Invoice_number` |
    | **Total**   | Text| `Invoice_total` |
    | **Customer**| Text      | `customer` |

    ![](../images/2024-08-23-14-22-51.png)

    - Clique em **Back**.

5. Retorne para a tela "New Field" e crie um campo do tipo "Table".

    ![](../images/2025-01-28-12-13-23.png)

     - Preencha o formulário:

    | Campo              | Valor                                      |
    |--------------------|--------------------------------------------|
    | **Table name** | Line Item                                |
    | **Target Table**    | `Invoice Line Item [x_snc_invoice_app_invoice_line_item]`|
    | **Parent Mapping to Field** | Invoice Task                    |

    ![](../images/2025-01-28-12-14-21.png)

     - Clique em **Add columns**.

6. Crie 3 colunas (Item Name, Quantity e Total), atribuídos ao Field Group **Line Items**, conforme mostrado abaixo:
   
    | Column title  | Assign to a field group | Target Field |
    |-------------|-------------------------|--------------|
    | **Item Name** | Line Items            | `item_name`  |
    | **Quantity**  | Line Items            | `quantity`   |
    | **Line Total**| Line Items            | `total`      |

    :::info
    Para adicionar mais colunas clique no botão `+ New column` abaixo.
    :::

    ![](../images/2025-01-28-12-16-29.png)

    - Clique em "Save"

## Verificação do Lab

Verifique se criamos um campo para cada valor que precisa ser extraído de nossas faturas.

![](../images/2024-08-23-14-32-27.png)
