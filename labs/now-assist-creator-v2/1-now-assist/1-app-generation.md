---
id: 1-app-generation
title: "1. Geração de Aplicativo"
hide_table_of_contents: true
draft: false
---

<div class="button-homepage-vancouver">
🕒 Duração Estimada: 20 min
</div>


O **Now Assist for Creator** permite que você expresse suas ideias em linguagem natural. O Now Assist interpreta essas descrições e as converte em componentes fundamentais de uma aplicação.

Isso capacita desenvolvedores cidadãos a começarem a criar aplicações sem precisar de conhecimento aprofundado em programação, ao mesmo tempo que oferece um ponto de partida poderoso para desenvolvedores pro-code.

Isso permite que você possa simplesmente descrever o que deseja que a aplicação faça, e a funcionalidade de **App Generation** traduz isso em um app funcional com todos os componentes criados. Isso significa um desenvolvimento mais rápido, com menos erros — permitindo que até usuários com pouca experiência em codificação contribuam.

:::info
Durante o exercício, as perguntas feitas pelo Now Assist podem não corresponder exatamente às capturas de tela no guia do lab. **Tudo bem!**  
Por favor, copie e cole os prompts exatamente como fornecidos, na ordem apresentada.
:::

:::info
Você não precisa salvar seu trabalho em nenhum momento durante este exercício.
:::

---

### 📌 Passos

1. Impersone **Alexandra Arias**

2. Clique em **All** e pesquise **ServiceNow Studio**.
   ![](../images/2025-09-10-11-17-34.png)

3. Abra o **Now Assist Panel** 
   1. Clique no ícone **Now Assist** no canto superior direito.  
   2. Clique no ícone de **alfinete** para fixar o painel à direita. 

   ![](../images/2025-09-10-09-57-44.png)

   :::tip Navegação mais rápida
   Fixar o **Now Assist Panel** ajuda a acompanhar o histórico de prompts e respostas enquanto você avança nos passos do lab.
   :::

4. Clique em **Create an App**.  
   ![](../../images/2025-07-21-14-46-33.png)

5. Copie e cole ou digite o seguinte texto no campo de entrada e pressione **Enter**:  
   ```txt title="App Generation - Prompt 1"
   I want to create an App for Cross-training in my organization. The app name should be 
   // highlight-next-line
   [YOUR APP NAME]
   ```  
   :::danger
   Substitua a tag **[YOUR APP NAME]** acima pela suas iniciais e 4 dígitos do seu aniversário MMDD, exemplo: RY0824
   :::

   ![](../../images/2025-03-06-19-09-16.png)

6. Copie e cole o prompt abaixo no campo de entrada:  
   ```txt title="App Generation - Prompt 2"
   The app will have a general table listing various training topics, managed by Training Coordinators. The data in this table can be modified only by training coordinators.  
   ```
   ![](../../images/2025-03-06-19-10-12.png)

7. Copie e cole o prompt abaixo no campo de entrada:  
   ```txt title="App Generation - Prompt 3"
   This table would have Topic Name and Date/time on which training session for the associated topic can be held. Training coordinators manage the data in this table. There should be another integer field named Attendees limit.  
   ```
   ![](../../images/2025-03-06-19-10-27.png)

8.  Copie e cole o prompt abaixo no campo de entrada:  
   ```txt title="App Generation - Prompt 4"
   The app will have two forms - one is for trainers to volunteer for a topic and this submitted data should be stored in one table. Another form is for attendees to register for a training session, and this submitted data should be stored in another table. Once the forms are submitted, all the data should be read-only and no one can modify the data.  
   ```
   ![](../../images/2025-03-06-19-10-45.png)

9.  Copie e cole o prompt abaixo no campo de entrada:  
   ```txt title="App Generation - Prompt 5"
   Trainers should select a topic from the list of available topics. On selection of topic, date/time should be auto-populated. Along with that, trainers should choose whether the session would be Virtual or In-person. I hope you got it, so that I will then proceed with attendees form.
   ```
   ![](../../images/2025-03-06-19-10-57.png) 

10. Copie e cole o prompt abaixo no campo de entrada:  
   ```txt title="App Generation - Prompt 6"
   Attendees would just see the list of topics available, and a date/time field which should be auto-populated based on the selected topic. I would want another form where attendees can provide feedback after the conclusion of each training session. The submitted feedback should be stored in another table.  
   ```
   ![](../../images/2025-03-06-19-11-07.png)

11. Copie e cole o prompt abaixo no campo de entrada:  
   ```txt title="App Generation - Prompt 7"
   Attendees should select a concluded training topic from the data list and provide their feedback using below fields: Training session rating (on a scale of 1-5) and Suggestions for improvement.  
   ```
   ![](../../images/2025-03-06-19-11-17.png)

12. Aguarde até que o Now Assist retorne com uma mensagem indicando que irá gerar uma prévia da aplicação. 

   ![](../images/2025-09-10-09-34-58.png)

   :::note
   O Now Assist pode fazer perguntas adicionais neste ponto — isso é esperado devido à natureza não determinística da GenAI. Responda normalmente à solicitação apresentada.
   :::

   :::tip
   Caso ele sugira alguma funcionalidade ou recurso adicional responda simplesmente: **"No, create the app preview."** para seguir para a conclusão.
   :::


13. Acompanhe a geração da prévia na área central do ServiceNow Studio.
    
    ![](../images/2025-09-10-09-39-26.png)


14. Clique em **Save files and open app**.  
   ![](../../images/2025-07-21-14-51-28.png)

15. Aguarde alguns momentos para que a aplicação seja gerada.  
   ![](./../img/image010.png)

16. Clique no ícone de alfinete novamente para desafixar o **Now Assist Panel**.  
   ![](./../img/image011.png)

17. Clique no ícone de brilho para ocultar o **Now Assist Panel**.  
   ![](./../img/image012.png)

18. No menu lateral esquerdo, clique no ícone de **atualizar** para atualizar a lista de Apps.  
   ![](./../img/image013.png)

19. Localize o nome da sua aplicação na navegação lateral e clique nele para abrir.  
   ![](./../img/image014.png)

20. Expanda a seção **Tables** e clique em qualquer tabela para abri-la no **Table Builder**.  
   _O Table Builder é uma interface amigável para explorar campos, formulários e fluxos associados a uma tabela._  
   _Note que o **App Generation** criou todas as tabelas automaticamente._  
   ![](./../img/image015.png)

21. **💡 Dica:** Clique no ícone de menu (hambúrguer) no canto superior esquerdo para alternar a exibição do menu lateral.  
   _Isso pode ajudar em telas com resolução menor._  
   ![](./../img/image016.png)

   :::info
   Ao conversar com o Now Assist para criar o app, ele fará a maior parte do trabalho de desenvolvimento.  
   Entretanto, pode ser necessário ajustar ou corrigir alguns pontos.  
   Como se trata de uma IA generativa, os apps podem variar de uma execução para outra.  
   **Continue com o lab mesmo que sua aplicação gerada não esteja idêntica às capturas de tela.**
   :::

22. Clique em **Forms** para visualizar e editar os formulários da tabela.  
   ![](./../img/image017.png)

23. Clique no **X** para fechar a aba da tabela no Studio.  
   ![](./../img/image018.png)

---

### ✅ Recapitulando

**Parabéns!**  
Você criou o app de **Cross Training Management** usando a funcionalidade de **App Generation**!

Esse app funciona como um contêiner para todas as configurações necessárias: tabelas, formulários, fluxos e mais.
