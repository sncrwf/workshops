---
id: 1-app-generation
title: "1. Geração de Aplicativo"
hide_table_of_contents: true
draft: false
---
<div class="button-homepage-vancouver">
🕒 Duração Estimada: 20 min
</div>

## 🔍 Visão Geral  

O **Now Assist for Creator** permite que você descreva sua ideia em **linguagem natural**, e a IA converte essa descrição em **componentes fundamentais do aplicativo**.  

Isso permite que **citizen developers** criem aplicativos sem precisar de **conhecimentos avançados em código**, enquanto os **desenvolvedores experientes** podem usar essa base como ponto de partida.  

Você pode simplesmente descrever o que deseja, e o **App Generation** transformará essa conversa em um aplicativo funcional com **tabelas, formulários e segurança configurados automaticamente**.  

🚀 Isso acelera o desenvolvimento, reduz erros e permite que mais pessoas contribuam para a criação de aplicações na plataforma.  

---

:::info
As perguntas do Now Assist podem não corresponder exatamente às capturas de tela do guia do laboratório.  **Isso é esperado!** Sempre copie e cole os prompts fornecidos no guia, **seguindo a ordem correta**.  
:::

:::danger
<div class="dev-badge">⚠️ Problema de Comunicação com o Now Assist?</div>

Se você **vir um erro indicando que a instância não pode se comunicar com o Now Assist**, **pule para o passo 17** e continue o laboratório normalmente.  

![](../images/2025-03-06-19-07-22.png)
:::
---

## 🛠️ Passos  

1. Navegue até **ServiceNow Studio**.
   ![](../images/2025-03-08-17-00-42.png)
2. Abra o painel **Now Assist** clicando no ícone no canto superior direito.
   ![](../images/2025-03-08-01-47-02.png)
3. Fixe o menu clicando no ícone de **Pin** no lado direito da tela.
   ![](../images/2025-03-08-01-47-37.png)
4. Clique em **"Create an App"** no painel **Now Assist**.
   ![](../images/2025-03-08-01-48-03.png)

   > 📌 Importante: Para geração de aplicativos, é necessário **clicar na opção**. Digitar "Create an app" manualmente **não funciona** neste estágio.  

5. Copie e cole o prompt abaixo no campo de entrada:
   
   ```txt title="App Generation - Prompt 1"
   I want to create an App for Cross-training in my organization. The app name should be 
   // highlight-next-line
   [YOUR APP NAME]
   ```  
   :::danger
   Substitua a tag **[YOUR APP NAME]** acima pela suas iniciais e 4 dígitos do seu aniversário DDMM, exemplo: RY2503
   :::

   ![](../images/2025-03-08-01-51-29.png)

6. Copie e cole o prompt abaixo no campo de entrada:  
   ```txt title="App Generation - Prompt 2"
   The app will have a general table listing various training topics, managed by Training Coordinators. The data in this table can be modified only by training coordinators.  
   ```
   ![](../images/2025-03-06-19-10-12.png)

7. Copie e cole o prompt abaixo no campo de entrada:  
   ```txt title="App Generation - Prompt 3"
   This table would have Topic Name and Date/time on which training session for the associated topic can be held. Training coordinators manage the data in this table. There should be another integer field named Attendees limit.  
   ```
   ![](../images/2025-03-06-19-10-27.png)

8.  Copie e cole o prompt abaixo no campo de entrada:  
   ```txt title="App Generation - Prompt 4"
   The app will have two forms - one is for trainers to volunteer for a topic and this submitted data should be stored in one table. Another form is for attendees to register for a training session, and this submitted data should be stored in another table. Once the forms are submitted, all the data should be read-only and no one can modify the data.  
   ```
   ![](../images/2025-03-06-19-10-45.png)

9.  Copie e cole o prompt abaixo no campo de entrada:  
   ```txt title="App Generation - Prompt 5"
   Trainers should select a topic from the list of available topics. On selection of topic, date/time should be auto-populated. Along with that, trainers should choose whether the session would be Virtual or In-person. I hope you got it, so that I will then proceed with attendees form. 
   ```
   ![](../images/2025-03-06-19-10-57.png) 

10. Copie e cole o prompt abaixo no campo de entrada:  
   ```txt title="App Generation - Prompt 6"
   Attendees would just see the list of topics available, and a date/time field which should be auto-populated based on the selected topic. I would want another form where attendees can provide feedback after the conclusion of each training session. The submitted feedback should be stored in another table.  
   ```
   ![](../images/2025-03-06-19-11-07.png)

11. Copie e cole o prompt abaixo no campo de entrada:  
   ```txt title="App Generation - Prompt 7"
   Attendees should select a concluded training topic from the data list and provide their feedback using below fields: Training session rating (on a scale of 1-5) and Suggestions for improvement.  
   ```
   ![](../images/2025-03-06-19-11-17.png)

12. Clique em **"View more"** para expandir os detalhes do aplicativo.
    ![](../images/2025-03-06-19-11-36.png)

13. Clique no botão **"Preview app"**.  
    ![](../images/2025-03-06-19-11-53.png)
14. Aguarde alguns momentos enquanto o Now Assist gera o aplicativo.  
    ![](../images/2025-03-08-01-58-46.png)
15. Clique em **"Save and open app"**.
    ![](../images/2025-03-06-19-12-32.png)
    ![](../images/2025-03-08-02-05-16.png)   

:::info
Quando você conversa com o Now Assist para criar o aplicativo, ele fará a maior parte do trabalho de desenvolvimento, mas, às vezes, pode ser necessário corrigir ou ajustar algumas coisas. Além disso, devido à natureza da IA Generativa, o aplicativo de cada pessoa pode acabar ficando um pouco diferente. 

**Por favor, CONTINUE o laboratório** mesmo que o seu aplicativo gerado não corresponda exatamente às capturas de tela nos próximos passos.
:::


## 🔍 Explorando o Aplicativo  

Agora que o aplicativo foi gerado, vamos explorar os componentes criados:  

21. Atualize a lista de apps para buscar pelo o app criado
   ![](../images/2025-03-08-02-07-39.png)

22. Busque pelo nome do aplicativo (lembre-se que utilizamos as suas iniciais e 4 dígitos do seu aniversário DDMM, exemplo: RY2503) 
   ![](../images/2025-03-08-02-08-46.png)
    - Em seguida, selecione-o.

23. Selecione a opção "More Options" (:) e em seguida **"Show parent categories"**
     ![](../images/2025-03-08-02-10-47.png)

   > 📌 Assim agruparemos os arquivos para visualizar de forma mais organizada.

24. Navegue pela estrutura de arquivos gerados para a sua aplicação!
   ![](../images/2025-03-08-02-13-50.png)

## 📄 Sumarizando aplicativo

Agora, vamos aproveitar outra capacidade de GenAI para gerar uma descrição para a nossa aplicação. A **Skill App Summarization** analisa os metadados da aplicação para criar uma descrição.

25. Clique no botão **Summarize**
    ![](../images/2025-03-08-17-08-36.png)

26. Aguarde até que a sumarização seja concluída e avalie o texto gerado. Caso esteja satisfatório clique em **Use as app description**.
    ![](../images/2025-03-08-17-11-21.png)

27. Clique em **Save app description**
   ![](../images/2025-03-08-17-11-56.png)

28. Observe que a descrição foi adicionada.
    ![](../images/2025-03-08-17-12-30.png)

## 🎯 Recapitulação  

**Parabéns!** 🎉  

Você criou o aplicativo **Cross-Training Management** utilizando **App Generation**!  

> Pense neste aplicativo como um **container para todas as configurações**, incluindo **tabelas, formulários, fluxos e mais**.  
