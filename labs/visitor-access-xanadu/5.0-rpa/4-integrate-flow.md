---
id: 4-integrate-flow
title: "Integre o RPA ao nosso fluxo de visitantes"
pagination_label: "4. RPA integrado ao fluxo"
sidebar_label: "4. RPA integrado ao fluxo"
hide_table_of_contents: true
draft: false
---

Agora para integrarmos todo o processo de fim-a-fim vamos editar o fluxo `Check-in Visitante` para que ele adicione um item a fila do RPA para que ele faça a impressão do crachá de visitante.

1. Retorne para o App Engine Studio. Caso tenha fechado a janela do AES, acesse sua Instância de laboratório e navegue até o **AES (App Engine Studio)** em `All > App Engine > App Engine Studio`. e acesse a aplicação `Acme Access Hub`.


2. Na aba Página Inicial do App, na seção "Lógica e automação", selecione o fluxo `Check-in Visitante`.
    ![](../images/2024-12-11-00-04-14.png)

3. Mude a visão do fluxo clicano no ícone.
    ![](../images/2024-12-11-00-05-20.png)

4. Adicione uma nova action após o `Update Visitantes Record`
    ![](../images/2024-12-11-00-05-54.png)

5. Selecione a action **RPA Hub > Add Work Item to Queue**
   ![](../images/2024-12-11-00-37-09.png)

6. No campo **Queue Name [Work Queue]** selecione **Badge Printing**
   ![](../images/2024-12-11-00-38-15.png)

7. Para o campo **Name** arraste o Data Pill **Visitantes Record > Number**
    ![](../images/2024-12-11-00-39-14.png)

8. No campo **Content** clique no ícone de scripting.
   ![](../images/2024-12-11-00-40-22.png)

9. Copie e cole o código abaixo e clique em <span className="button-purple">Done</span>:

    ```javascript
    var output = {
        "AccessExpirationDate": fd_data._1__check_if_a_user_exists.output.user.access_expiration,
        "BuildingLocation": fd_data._1__check_if_a_user_exists.output.user.building_location,
        "guestemail": fd_data._1__check_if_a_user_exists.output.user.guest_email,
        "HostEmail": fd_data._1__check_if_a_user_exists.output.user.host_email,
        "HostIdNumber": fd_data._1__check_if_a_user_exists.output.user.host_id_number,
        "HostName": fd_data._1__check_if_a_user_exists.output.user.host_name,
        "phone": fd_data._1__check_if_a_user_exists.output.user.phone,
        "Guest Title": fd_data._1__check_if_a_user_exists.output.user.guest_title
    };
    return JSON.stringify(output);
    ```

    ![](../images/2024-12-11-00-41-29.png)

    :::info
    O uso de código neste caso facilita na preparação fo payload para o RPA que espera um array JSON para processar as informações.
    :::

12. No canto superior direito da tela, clique em <span className="button-purple">Save</span>.

13. Clique em <span className="button-purple">Activate</span> à esquerda do botão Save. Isso torna o Fluxo 'ativo' no aplicativo.  

14. Na caixa de Confirmação, clique no botão <span className="button-purple">Activate</span>.