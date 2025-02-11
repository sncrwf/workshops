---
id: 6-deploy
title: "6. Implantação"
hide_table_of_contents: true
draft: false
---

# Exercício 6 – Implantação (15 min)

**Jayne** está pronta para aprovar e implantar o novo aplicativo de **Sydney**.  

Ela precisará seguir o **Processo de Mudança do ITSM**, pois estará realizando uma alteração no ambiente de **Produção** ao implantar o aplicativo.  

Além disso, sua organização deseja rastrear o aplicativo no **CMDB**.  

Felizmente, o **App Engine Management Center** já está **integrado com o Change e o CMDB**, facilitando todo o processo.  

## 🛠️ Tempo de Produção!  

⚠️ **Os próximos passos devem ser realizados apenas na instância de Produção (Prod).**  

1. Alterne para a instância de **Produção (Prod)**.  
2. Impersone **Jayne Nigel**.  
3. Clique no número **3** acima da palavra **Deployment**. 
   ![](../images/2025-02-11-14-22-31.png) 
4. Clique no primeiro número do **ticket** para abrir a solicitação de implantação do aplicativo **Request Time Off – Creator Studio**.  
   ![](../images/2025-02-11-14-22-38.png)
5. No canto superior direito, clique em **Approve & Create Change Request**.  
6. Clique em **Change Requests** para abrir a lista de solicitações de mudança.  
   ![](../images/2025-02-11-14-22-44.png)
7. Clique no número do **ticket** para abrir a solicitação de mudança.  
   ![](../images/2025-02-11-14-22-51.png)
8. Altere o campo **State** para **Assess**.  
   ![](../images/2025-02-11-14-23-00.png)
9.  Clique em **Save** no canto superior direito.  
10. Clique em **Approvers** para abrir a lista de aprovadores.  
    ![](../images/2025-02-11-14-23-09.png)
11. Ao lado do nome de **Jayne**, clique em **Requested** para abrir a solicitação de aprovação.  
    ![](../images/2025-02-11-14-23-16.png)
12. Altere o **State** para **Approved** e clique em **Save** no canto superior direito.  
    ![](../images/2025-02-11-14-23-23.png)
13. Clique no ícone **ⓘ** ao lado do número do **Change ticket** para retornar à solicitação de mudança.  
    ![](../images/2025-02-11-14-23-30.png)
14. Clique novamente em **Approvers** para abrir a lista de aprovadores.  
15. Clique no **ícone de atualização** para atualizar a lista de aprovadores. 
    ![](../images/2025-02-11-14-23-36.png) 
16. Ao lado de **Jayne Nigel’s CAB Approval**, clique em **Requested**.  
    ![](../images/2025-02-11-14-23-42.png)
17. Altere o **State** para **Approved** e clique em **Save** no canto superior direito.  
    ![](../images/2025-02-11-14-23-50.png)
18. Clique no ícone **ⓘ** ao lado do número do **Change ticket** para retornar à solicitação de mudança. 
    ![](../images/2025-02-11-14-23-58.png) 
19. Atualize a página do navegador.  
20. Altere o **State** para **Implement** e clique em **Save**.  
    ![](../images/2025-02-11-14-24-04.png)
21. Revise a mensagem amarela no **Activity log**.  
    ![](../images/2025-02-11-14-24-10.png)
   > A mensagem explicará que a implantação do aplicativo foi aprovada e indicará **quando ele será implantado automaticamente no ambiente de Produção (Prod)**.  

## 🎯 Recapitulação  

**Jayne** conseguiu aprovar e implantar o aplicativo de **Sydney** no ambiente de **Produção** com facilidade.  

O **App Engine Management Center** simplificou o processo ao permitir a criação rápida de uma **Change Request** e, automaticamente, criar um **Configuration Item** no **CMDB** vinculado à solicitação de mudança.  
