---
id: 7-testing
title: "7. Testes"
hide_table_of_contents: true
draft: false
---

<div class="button-homepage-vancouver">
🕒 Duração Estimada: 15 min
</div>

## 🔍 Visão Geral  

A **Alexandra** está satisfeita com as customizações do aplicativo **Cross-Training** e agora ele está pronto para ser utilizado pelos funcionários da empresa.  

A equipe de **App Engine Admins** aprovou sua solicitação de implantação na instância de **Produção** do ServiceNow utilizando o **App Engine Management Center**, que gerenciou a mudança via **Change Management e CMDB**.  

Agora, é hora de testar!  

## **Seção 1 – O Treinador que deseja ensinar**  

**Richard Lambert** é um treinador na organização e deseja se voluntariar para ministrar uma sessão sobre **Cloud Computing e Machine Learning**.  

![](../images/2025-03-06-20-52-38.png)

:::danger
⚠️ **Você pode ver algumas mensagens de erro em vermelho durante o teste. Elas podem ser ignoradas com segurança.**
![](../images/2025-03-06-20-24-21.png)  
:::
### **Passos**  

1. **Impersonar Richard Lambert**.  
2. No menu **Favorites**, clique em **"Volunteer to lead a Training Session"**.  
3. No campo **"Select the training topic…"**, selecione **Cloud Computing**.
   ![](../images/2025-03-06-20-24-55.png)  
4. Observe a **mensagem de alerta vermelha** na parte superior da página.  

   > 📌 Como essa sessão já possui um treinador voluntário, a validação do formulário exige a seleção de outro tópico.  

5. No campo **"Select the training topic…"**, selecione **Networking**. 
   ![](../images/2025-03-06-20-25-07.png) 
6. No campo **"Session Type"**, selecione **Virtual**. 
   ![](../images/2025-03-06-20-25-22.png) 
7. Clique em **Submit**.  
   ![](../images/2025-03-06-20-25-45.png)
8. Feche a aba atual do navegador.  

### **Recapitulação**  

**Richard conseguiu se inscrever como voluntário para ministrar uma sessão de treinamento.**  

## **Seção 2 – O Funcionário que deseja aprender**  

**Peter Harrell** é um funcionário da organização e precisa se especializar em **Cloud Computing e Machine Learning**, pois essas habilidades são exigidas para seu próximo projeto.

![](../images/2025-03-06-20-52-51.png)

### **Passos**  

1. **Impersonar Peter Harrell**.  
2. No menu **Favorites**, clique em **"Register for training session"**.  
3. No campo **"Select a Training Session…"**, selecione **Cloud Computing**.  
4. Observe a **mensagem de alerta vermelha** na parte superior da página.  
   ![](../images/2025-03-06-20-29-47.png)
   > 📌 Como essa sessão já atingiu o número máximo de participantes, o sistema solicita que Peter escolha outra sessão.  

5. No campo **"Select a Training Session…"**, selecione **Machine Learning**.  
6. Clique no botão **Submit**.  
7. Feche a aba atual do navegador.  

### **Recapitulação**  

**Peter conseguiu se inscrever em uma sessão de treinamento disponível.**  

## **Seção 3 – A Gestora do Programa de Treinamento**  

Agora vamos testar o aplicativo como **Alexandra**.  

Ela deseja **acompanhar e gerenciar** todas as sessões do **Programa de Cross-Training** na ACME Inc.  

Ela pode fazer isso através do **novo Workspace** criado para o aplicativo.  

![](../images/2025-03-06-20-30-18.png)

### **Passos**  

1. **Impersonar Alexandra Arias**.  
2. Clique no menu **Workspaces**.  

   > 📌 Se o menu Workspaces não estiver visível, clique nos **três pontos** para expandi-lo.  

3. Clique em **Cross-Training Management**.  
   ![](../images/2025-03-06-20-30-37.png)

   > 📌 Isso abrirá o **Workspace personalizado** para o aplicativo de Alexandra.  

4. No painel principal do **Dashboard**, clique em **Machine Learning** na lista central.  
   ![](../images/2025-03-06-20-30-48.png)
5. Observe que a **aba Playbook** é a guia padrão no registro da sessão de treinamento.  
   ![](../images/2025-03-06-20-31-07.png)
6. Na etapa **Review Session Information**, clique na **Activity Card "Instruction"**.  
   ![](../images/2025-03-06-20-31-18.png)
   > 📌 Alexandra revisa as instruções e clica em **Mark Complete** para finalizar essa etapa do Playbook.  

7. Confirme que a **etapa Review Session Information está agora completa**.  
   ![](../images/2025-03-06-20-31-35.png)
8. No lado esquerdo, clique na **etapa Manage Attendees**.  
   ![](../images/2025-03-06-20-31-44.png)
9.  Clique na **Activity Card "Review Attendee List"**.  
    ![](../images/2025-03-06-20-31-59.png)

   > 📌 Esta atividade exibe uma **lista de registros** da tabela de participantes **(Attendees)** relacionados à sessão de treinamento.  

10. Revise a atividade **Send email to Attendees** e clique no botão **Send Email**.  
   ![](../images/2025-03-06-20-32-15.png)
    > 📌 O sistema enviará e-mails automáticos aos participantes.  

11. O Playbook avançará automaticamente para a próxima etapa: **Prep the Volunteer**.  
12. Clique no botão **Send Email** para enviar um e-mail ao **Training Volunteer**, explicando os detalhes da sessão.  
13. O Playbook avançará para a etapa **Day of Training**.  
    ![](../images/2025-03-06-20-32-31.png)
14. No dia da sessão, o **Training Volunteer** clica no botão **Update** para iniciar o treinamento.  
    ![](../images/2025-03-06-20-32-46.png)
15. Após a conclusão da sessão, o **Training Volunteer** clica no botão **Update** na atividade **End the Training Session**. 
    ![](../images/2025-03-06-20-32-54.png) 
16. Neste estágio do Playbook, um **e-mail automatizado** será enviado para os participantes, solicitando feedback sobre a sessão.  
17. O **Training Volunteer** e o **Training Coordinator** revisarão as respostas na **Review Feedback Activity Card**.  
    ![](../images/2025-03-06-20-33-04.png)
18. Após revisar os feedbacks, o **Training Coordinator** finalizará a sessão clicando no botão **Mark Complete**.  
    ![](../images/2025-03-06-20-33-13.png)
---

## 🎯 **Recapitulação**  

**Alexandra agora pode gerenciar facilmente todas as sessões do Programa de Cross-Training através do Workspace personalizado.**  

Antes, esse processo era feito manualmente via **e-mails e planilhas**, mas agora **quase tudo está automatizado**!  

---

## **🏆 Conclusão do Laboratório**  

🚀 **Parabéns!** Alexandra construiu um **aplicativo incrível** de Cross-Training utilizando a **plataforma ServiceNow**, o **App Engine** e o **Now Assist for Creator**.  

Agora, ela pode **escalar o programa de treinamentos globalmente** e permitir que mais funcionários colaborem no desenvolvimento de novas habilidades.  

---

## **💡 Explore mais!**  

Se você ainda tem tempo restante no laboratório, sinta-se à vontade para **experimentar outras funcionalidades do Now Assist for Creator** e explorar diferentes ideias!  

🔹 **Obrigado por participar deste laboratório!** 🎉