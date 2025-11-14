---
id: 6-code-generation
title: "6. Geração de Código"
hide_table_of_contents: true
draft: false
---

<div class="button-homepage-vancouver">
🕒 Duração Estimada: 10 min
</div>

## 🔍 Visão Geral  

A **validação de formulários** é essencial para garantir que os dados inseridos sigam as regras do aplicativo.  

O aplicativo **Cross-Training** precisa implementar duas regras de validação:  

✅ **Validação do Limite de Participantes** – Um alerta impedirá novos registros quando o limite for atingido.  
✅ **Verificação da Inscrição de Treinadores** – Uma regra impedirá treinadores de se voluntariarem para sessões que já possuam um instrutor.  

**Você** implementará essa lógica utilizando **JavaScript**, mas para acelerar o desenvolvimento, usará a funcionalidade **Now Assist Code Generation**.  


## 🛠️ Passos  

### **Criando um Script Include**  

1. Volte à aba da sua aplicação.
   ![](../../images/2025-03-08-02-31-36.png)
2. Selecione o botão <span className="button-purple-square">Create</span>.
   ![](../../images/2025-03-08-02-23-54.png)
3. Selecione a opção [More] > Server Development > Script Include e <span className="button-purple-square">Continue</span>.
   ![](../../images/2025-03-08-02-45-23.png)
4. No campo **Name**, digite:  
   ```txt title="Code Generation - Name"
   CrossTrainingLabUtils
   ```  
   ![](../../images/2025-03-06-20-11-23.png)

5. Marque a opção **Glide AJAX enabled**.  
   ![](../../images/2025-03-08-17-17-43.png)

6. No campo **Script**, clique na linha **3** e insira a função vazia abaixo:  
   ```js title="Code Generation - Function"
   checkAttendeesLimit: function() { 
   
   },
   ```
   ![](../../images/2025-03-06-20-13-32.png)
   ![](../../images/2025-03-06-20-15-28.png)

7. Na linha **4**, pressione **Cmd + Enter (Mac) ou Ctrl + Enter (Windows)** para ativar a funcionalidade **"Generate code with Now Assist"**, que converterá o prompt em código JavaScript.

   ![](../../images/2025-03-06-20-19-28.png)  
   ```txt title="Code Generation - Function"
   Consulte a tabela de tópicos de treinamento para o tópico atual e armazene o limite de participantes na variável attendeesLimit. Em seguida, agregue a tabela de participantes do treinamento para o tópico atual e verifique se o número total de registros excede attendeesLimit. Retorne true ou false.
   ```

8. Aguarde até que o Now Assist Code Generation gere a resposta. O código gerado aparecerá em **verde**.  
   ![](../../images/2025-03-08-02-49-07.png)  
9. Clique em **Accept** para aceitar o código gerado.   
   - A **barra roxa ao lado** indicará que o código foi gerado pelo **Now Assist**.
   ![](../../images/2025-03-08-02-50-13.png)
10. Clique no botão **"Format Code"** no topo do editor para organizar e melhorar a legibilidade do código.
    ![](../../images/2025-03-06-20-21-36.png)  

11. Selecione parte do código gerado e perceba que o ícone do Now Assist aparece ao lado.
    ![](../../images/2025-03-08-02-51-52.png)

12. Clique no ícone do Now Assist e selecione a opção "Explain code in detail".
    ![](../../images/2025-03-08-02-53-00.png)

13. O Now Assist detalhará o trecho de código selecionado.
    ![](../../images/2025-03-08-02-53-37.png)

14. Clique em **Submit**.

   :::danger
   ⚠️ **Ignore qualquer mensagem sobre salvar o trabalho.** Não é necessário salvar.  
   :::

---

## 🎯 Recapitulação  

**Parabéns!** 🎉  

**Você** utilizou a **Code Generation do Now Assist** para **criar rapidamente a lógica de validação** que Alexandra precisava no aplicativo **Cross-Training**.  
