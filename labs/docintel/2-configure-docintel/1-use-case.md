---
id: 1-use-case
title: 2.1 Configurar um caso de uso com Document Intelligence Admin
hide_table_of_contents: true
draft: false
---

1. Navegue para **Document Intelligence > Administration > Home**.

    ![](../images/2024-08-23-14-19-42.png)

   - Nota: A página será aberta em uma nova aba do navegador. Se isso não acontecer, verifique se o seu navegador não está bloqueando a abertura.
2. Vá para a aba **Use Cases** e selecione **New use case**.

    ![](../images/2024-08-23-14-20-56.png)   

   - Preencha o formulário:

    | Campo                        | Valor                                      |
    |------------------------------|--------------------------------------------|
    | **Name**                     | Invoice                                    |
    | **Location for the extracted data** | `Invoice Task [x_snc_invoice_app_invoice_task]` |

    ![](../images/2024-08-23-14-21-25.png)

   - Por padrão, o "Recommendation mode" é selecionado como o modo de extração.
   - Clique em **Save**.

3. Abra o Use Case na lista.
    ![](../images/2024-08-23-14-21-49.png)
    - Na aba **Fields**, selecione **Define your fields**.

    ![](../images/2024-08-23-14-22-02.png)

1. Crie 4 campos (Date, Number, Customer, Total) conforme mostrado abaixo:
    :::tip
    Selecione a opção “Define multiple fields” para manter a janela pop-up aberta após cada campo ser adicionado.
    :::
   
    | Field Name  | Target Field  |
    |-------------|---------------|
    | **Date**    | `Invoice_date`|
    | **Number**  | `Invoice_number`|
    | **Total**   | `Invoice_total`|
    | **Customer**| customer      |

    ![](../images/2024-08-23-14-22-51.png)

2. Crie um Field Group clicando no sinal de “+” ao lado do campo de grupo de campos.
     - Preencha o formulário:

    | Campo              | Valor                                      |
    |--------------------|--------------------------------------------|
    | **Field Group Name** | Line Item                                |
    | **Field Group Type** | Table                                    |
    | **Target Table**    | `Invoice Line Item [x_snc_invoice_app_invoice_line_item]`|
    | **Parent Mapping to Field** | Invoice Task                    |

    ![](../images/2024-08-23-14-24-03.png)

     - Clique em **Add Field Group**.

3. Crie 3 campos (Item Name, Quantity e Total), atribuídos ao Field Group **Line Items**, conforme mostrado abaixo:

    :::tip
    Selecione a opção “Define multiple fields” para manter a janela pop-up aberta após cada campo ser adicionado.
    :::
   
    | Field Name  | Assign to a field group | Target Field |
    |-------------|-------------------------|--------------|
    | **Item Name** | Line Items            | `item_name`  |
    | **Quantity**  | Line Items            | `quantity`   |
    | **Line Total**| Line Items            | `total`      |

    ![](../images/2024-08-23-14-26-14.png)

## Verificação do Lab

Verifique se criamos um campo para cada valor que precisa ser extraído de nossas faturas.

![](../images/2024-08-23-14-32-27.png)
