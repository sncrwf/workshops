---
id: 3-flow-generation
title: "3. Geração de Flows"
hide_table_of_contents: true
draft: false
---


<div class="button-homepage-vancouver">
🕒 Duração Estimada: 10 min
</div>

## 🔍 Visão Geral  

Agora que exploramos a estrutura inicial do aplicativo, vamos ver como o **Now Assist for Creator** simplifica a **automação de fluxos de trabalho**.  

Você deseja automatizar **e-mails de lembrete** para participantes e treinadores **dois dias antes das sessões de treinamento**, além de enviar **e-mails de follow-up** para coletar feedback após cada sessão.  

Essas automações **eliminam tarefas manuais** e garantem que a comunicação ocorra no momento certo.  

Com a funcionalidade **Flow Generation**, você pode fornecer **descrições em linguagem natural**, e o **Now Assist for Creator** criará automaticamente um fluxo de trabalho correspondente.  

Ela deseja criar **dois fluxos de trabalho**:  
✅ **E-mail de lembrete para participantes e treinadores**.  
✅ **Coleta de feedback dos participantes após as sessões**.  

## Criando o Primeiro Fluxo – Lembrete de E-mail  

1. Agora, vamos retornar à aba da sua aplicação no ServiceNow Studio.
   ![](../../images/2025-07-21-15-25-22.png)

2. Selecione o botão <span className="button-purple-square">Create</span>.
   ![](../../images/2025-03-08-02-23-54.png)

3. Selecione a opção Automation > Flow e <span className="button-purple-square">Continue</span>.
   ![](../../images/2025-03-08-02-25-31.png)

4. Agora, utilizaremos o Now Assist para criar a estrutura do fluxo. 
5. No campo **Flow Name**, digite:  
   
   ```txt title="Flow Generation - Title 1"
   Reminder email for attendees and trainers
   ```  

6. No campo **Now Assist Directions**, digite:  

   ```txt title="Flow Generation - Prompt 1"
   Create a scheduled job that triggers every day at 2 AM. It should look up training sessions whose date is 2 days from now. Then look up attendees and trainers for each training session, and send mail.
   ```  
7.  Clique em <span className="button-purple-square">Generate flow preview</span>. 
   ![](../../images/2025-03-08-02-27-37.png)
8.  Aguarde a geração e em seguida clique em <span className="button-purple-square">Save and edit flow</span>  
    ![](../../images/2025-03-08-02-29-19.png)
9.  Altere a visualização de **Diagram View** para **Vertical View** clicando no botão de alternância.  
   ![](../../images/2025-03-06-19-58-13.png)
10. Verifique o flow criado.
    ![](../../images/2025-03-08-02-30-19.png)

:::info
Quando você conversa com o Now Assist para criar o aplicativo, ele fará a maior parte do trabalho de desenvolvimento, mas, às vezes, pode ser necessário corrigir ou ajustar algumas coisas. Além disso, devido à natureza da IA Generativa, o aplicativo de cada pessoa pode acabar ficando um pouco diferente. 

**Por favor, CONTINUE o laboratório** mesmo que o seu aplicativo gerado não corresponda exatamente às capturas de tela nos próximos passos.
:::

## Criando o Segundo Fluxo – Coleta de Feedback  

1. Volte à aba da sua aplicação.
   ![](../../images/2025-03-08-02-31-36.png)
2. Selecione o botão <span className="button-purple-square">Create</span>.
   ![](../../images/2025-03-08-02-23-54.png)

3. Selecione a opção Automation > Flow e <span className="button-purple-square">Continue</span>.
   ![](../../images/2025-03-08-02-25-31.png)

4. No campo **Flow Name**, digite:  
   
   ```txt title="Flow Generation - Title 2"
   Gather Feedback from Attendees
   ```  

5. No campo **Now Assist Directions**, digite:  

   ```txt title="Flow Generation - Prompt 2"
   Create a scheduled job that runs every day at 3 AM. It should look up training sessions that ended the day before, and look up attendees of each training session, and send mail.
   ``` 
6. Clique em <span className="button-purple-square">Generate flow preview</span>. 
   ![](../../images/2025-03-06-19-59-54.png)
7. Aguarde a geração e, em seguida, clique em <span className="button-purple-square">Save and edit flow</span>  
   ![](../../images/2025-03-06-20-00-02.png)
8. Altere a visualização do fluxo clicando no botão de alternância ao lado de **View** no topo da tela.  

## Explorando as Recomendações de Fluxo  

1. Clique em **"Add an Action, Flow Logic, or Subflow"**.
    ![](../../images/2025-03-06-20-00-33.png)  
2. Isso abrirá o **pop-up de Recomendações**.  
   ![](../../images/2025-03-06-20-00-41.png)
   > 📌 O **Now Assist for Creator** pode sugerir **Ações** que você pode estar procurando, economizando tempo ao criar um novo fluxo.  

   > ⚠️ Dependendo dos dados na instância do laboratório, pode aparecer a mensagem **"No recommendations found yet"**, o que é esperado caso a IA ainda não tenha dados suficientes.  

---

## 🎯 Recapitulação  

**Parabéns!** 🎉  

Você criou **dois fluxos automatizados** usando a funcionalidade **Flow Generation** do **Now Assist for Creator**!  

> No futuro, em versões como **Xanadu**, a funcionalidade de **Flow Generation** poderá **mapear automaticamente os data pills** e até **realizar edições utilizando prompts em linguagem natural**.  
