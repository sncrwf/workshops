---
title: "6. Testar sua aplicação"
hide_table_of_contents: true
draft: false
---


Agora, vamos fazer um teste rápido.

## Teste sua aplicação

1. Agora, vamos **impersonate** outro usuário; lembre-se que construímos isso usando uma persona admin.
2. Volte para a home da plataforma servicenow.
![](../images/2025-06-29-00-18-39.png)

3. Clique na foto do seu usuário no canto superior direito e escolha **Impersonate user**.
  ![](../images/2025-06-29-00-18-22.png)

1. Na caixa **Impersonate user**, digite e escolha o usuário  
**Billie Cowley** – quando selecionado, clique no botão **Impersonate user**.  
![](../images/2025-06-29-00-17-16.png)

  > **Nota:** Tudo o que você fizer a partir de agora será “como” Billie Cowley.

5. Agora, como Billie Cowley – no menu **All**, digite e clique para abrir o **Service Catalog** (a maneira mais rápida para encontrarmos nosso catalog item e testá-lo “ao vivo”).
![](../images/2025-06-29-00-19-10.png)

6. Uma vez no Service Catalog, pesquise por **Gift card request** no canto superior direito da visualização do catálogo. Pressione **Enter** para buscar.  
![](../images/2025-06-29-00-19-55.png)

7. Clique em **Gift card request** no resultado da busca.  
Isso permitirá que você envie uma solicitação de teste, como Billie Cowley.
![](../images/2025-06-29-00-20-16.png)

8. Preencha o formulário:  
   - Gift card da loja corporativa?: **Yes**  
   - Valor: **100**  
   - Recebedor: **Joe Employee**  
   - Justificativa: **Ótimo trabalho!**  

  ![](../images/2025-06-29-00-21-53.png)
  Clique em **Submit**

9. No menu do usuário no canto superior direito, clique em **BC** (para Billie Cowley) e escolha **End impersonation** para voltar à sua persona admin.  
![](../images/2025-06-29-00-22-28.png)

  > **Nota:** Você agora enviou uma solicitação como **Billie Cowley**. Billie tem uma gerente, Crystal. De volta à persona desenvolvedor/admin, vamos testar o workspace para solicitações do Creator Studio.

## Testar o “Request app workspace”

Agora de volta como admin

10. No menu **All**, digite e clique em **Request app workspace**
![](../images/2025-06-29-00-23-22.png)

11. O workspace será aberto. Este workspace é comum para todas as aplicações construídas usando o **Creator Studio**. O acesso aos processos individuais é governado pelos papéis definidos quando a aplicação e os fluxos de trabalho são criados no **Creator Studio**.

12. Role até encontrar a lista com o nome **Solicitar Gift Card** e selecione **Open**
![](../images/2025-06-29-00-25-21.png)

13.  Clique para visualizar a tarefa que Billie Cowley acabou de enviar, no meu caso é a **TASK0020120** (seu número será diferente – mas verifique o timestamp e verá que é o correto para você).
  ![](../images/2025-06-29-00-26-07.png)

14. Aqui, podemos ver que Billie criou a solicitação (opened by), e podemos visualizar os diversos dados que ela inseriu antes de enviar.
![](../images/2025-06-29-00-26-32.png)

15. Também podemos ver que o estado de aprovação da solicitação está como **Requested**.
![](../images/2025-06-29-00-26-59.png)

16.  Clique na lista relacionada **Automations**.  
  ![](../images/2025-06-29-00-27-36.png)

Observe que **Krystle Stika** foi designada para aprovar esta solicitação. Ela é a gerente de Billie.

A lista relacionada **Automations** mostra qualquer passo de automação que você construiu no Playbook. Os passos aqui também podem ser para o usuário do processo – o playbook guia o usuário sobre o que fazer.
