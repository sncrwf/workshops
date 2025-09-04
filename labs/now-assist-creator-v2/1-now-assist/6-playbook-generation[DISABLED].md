---
id: 6-playbook-generation
title: "6. Geração de Playbooks"
hide_table_of_contents: true
draft: false
---

<div class="button-homepage-vancouver">
🕒 Duração Estimada: 10 min
</div>

## 🔍 Visão Geral  

Manter um processo consistente para gerenciar sessões de treinamento é essencial.  

O **Now Assist for Playbook Generation** ajuda a **padronizar a gestão de treinamentos**, permitindo que **Você** defina **etapas-chave**, como:  

✅ **Atualização das informações da sessão**  
✅ **Envio de materiais para treinadores**  
✅ **Registro de participantes**  
✅ **Coleta de feedback**  

Isso cria um **roteiro visual (playbook)** para os **coordenadores de treinamento**, garantindo **consistência e eficiência** no processo.  

Com o **Playbook Generation**, Você pode descrever o processo em **linguagem natural**, e o **Now Assist for Creator** gerará automaticamente um **Playbook estruturado**.  


## 🛠️ Passos  

:::info
📌 Você ainda deve estar no **ServiceNow Studio** para este exercício. Se não estiver, **retorne a ele**.  
:::

1. Volte a aba da sua aplicação.
   ![](../../images/2025-03-08-02-31-36.png)
2. Selecione o botão <span className="button-purple-square">Create</span>.
   ![](../../images/2025-03-08-02-23-54.png)

3. Selecione a opção Automation > Playbook e <span className="button-purple-square">Continue</span>.
   ![](../../images/2025-03-08-02-36-30.png)

4. No campo **Playbook Name**, digite:  
   ```txt title="Playbook Generation - Title"
   Cross-training Management Playbook  
   ```
5. No campo **Now Assist Directions**, copie e cole o seguinte texto:  
   ```txt title="Playbook Generation - Prompt"
   I want to create a playbook to standardize Training sessions. 
   Stage1: Review Session Information - This stage involves training coordinators updating session related information and make it available for trainers and attendees to select it.
   Stage 2: Verify Trainer details and prepare them by sending email - This stage involves looking up trainer details and be able to send email detailing the process of conducting sessions or any presentation templates they should be using.
   Stage 3: Manage attendee registrations and prepare them by sending email. The email could include links to relevant materials, pre-requisite knowledge, or any software needed to be downloaded beforehand.
   Stage 4: Start the session and thus make it unavailable for attendees to register it further.
   Stage 5: Review Attendees feedback.
   ```
6.  Clique em <span className="button-purple-square">Generate playbook preview</span>. 
   ![](../../images/2025-03-08-02-37-33.png)
6.  Aguarde a geração e em seguida clique em <span className="button-purple-square">Save and edit playbook</span> 
   ![](../../images/2025-03-08-02-39-17.png)
7.  Explore o **Playbook gerado**.  
   ![](../../images/2025-03-06-20-04-22.png)
   > 📌 Você verá que **cada estágio foi capturado** e **espaços reservados foram inseridos** para os passos que precisarão ser desenvolvidos.  

### **Explorando Diferentes Modos de Visualização**  

7. Clique na opção **"Board View"** para visualizar o processo no **formato Kanban**.
   ![](../../images/2025-03-06-20-04-54.png)
8. **Compare as duas visualizações:**  
   ![](../../images/2025-03-06-20-05-06.png)

   > 📌 O **Board View** oferece uma visão estilo Kanban, enquanto o **Diagram View** exibe o processo de forma sequencial.  

   > 📌 As **etapas no topo das colunas** do **Board View** correspondem às **mesmas fases do Playbook**, visíveis para o **agente ou usuário final**.  

---

## 🎯 Recapitulação  

**Parabéns!** 🎉  

Você criou um **Playbook automatizado** utilizando a funcionalidade **Playbook Generation** do **Now Assist for Creator**!  

> No futuro, as versões mais recentes permitirão **menos placeholders** e a possibilidade de **editar playbooks usando prompts em linguagem natural**.  

