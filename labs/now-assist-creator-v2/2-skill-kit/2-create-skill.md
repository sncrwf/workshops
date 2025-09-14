---
id: 2-create-skill
title: "2. Criando uma Custom Skill com Skill Kit"
hide_table_of_contents: true
draft: false
---

<div class="button-homepage-vancouver">
🕒 Duração Estimada: 20 min
</div>

## 🔍 Visão Geral  

Neste workshop, você aprenderá a criar uma **Custom Skill** utilizando o **Skill Kit do ServiceNow**.  

O objetivo desta skill é **sugerir tópicos de treinamento relevantes** que o colaborador pode oferecer como instrutor voluntário, considerando sua área, ferramentas e habilidades, sem repetir tópicos já existentes.  

---

## 🛠️ Criando a Skill 

1. Verifique se ainda está impersonando **Alexandra Arias**. Se não estiver, impersone-a novamente.

2. Altere o escopo para **ACME Cross-Training - Pre-built Version 2024.09.27**

   ![](./../img/image095.png)

3. Clique em **All** e pesquise **Now Assist Skill Kit**. 
   ![](../images/2025-09-10-11-19-36.png)
4. Clique em **"Create Skill"**.  
   ![](../images/2025-09-04-10-36-00.png)
5. Vamos criar a nossa skill.
   1. No formulário, preencha os seguintes campos:  
   
      **Skill name:** Training Topic Suggestions  
      **Description:** Suggests personalized training topics based on the collaborator's area, tools, and skills, avoiding duplicates of existing topics in the system.  
      **Default provider:** Now LLM Generic
      
      **Provider API:** Now LLM Generic

      :::note Sobre provedores
      Caso sua instância tenha múltiplos provedores configurados (Now LLM, Azure OpenAI, etc.), selecione o provider/API padrão recomendado pelo admin. Para este lab, usamos **Now LLM Generic** por simplicidade.
      :::

   2. Em **"How would you like to create a prompt for this skill?"**, selecione **"Write from scratch"**.  
   3. Clique em **"Create skill and go to prompt editor"**.  

      ![](../images/2025-09-10-11-23-54.png)

6. Nossa skill foi salva como **Draft** e poderemos seguir daqui.
   ![](../images/2025-09-04-10-40-54.png)

## 🛠️ Definindo Inputs  

1. Localize o menu lateral **Skill contents**.  
2. Clique em **+** ao lado de **Skill inputs** para adicionar os inputs abaixo.  
   ![](../images/2025-09-04-10-42-44.png)
3. Configure os seguintes parâmetros:  

   1. **Área de Atuação / Cargo do Usuário:**
      - **Datatype:** String  
      - **Name:** area  
      - **Description:** What area do you work in  
      - **Mandatory:** ✅ `true`  

   2. **Habilidades que as Pessoas Costumam Pedir Ajuda:**
      - **Datatype:** String  
      - **Name:** skills  
      - **Description:** What skills do your colleagues often ask you help with  
      - **Mandatory:** ❌ `false`  

   3. **Ferramentas e Tecnologias Utilizadas:**
      - **Datatype:** String  
      - **Name:** tools  
      - **Description:** What tools or technologies do you often use  
      - **Mandatory:** ❌ `false`  
  
  ![](../images/2025-09-04-10-53-58.png)

:::tip Boas práticas de inputs
- Prefira textos curtos e objetivos.
- Para `tools` e `skills`, use vírgulas para separar itens (ex.: “Excel, Power BI, ServiceNow”).
- Evite duplicar termos; o prompt fará normalização, mas entradas limpas ajudam na qualidade.
:::

## 🛠️ Criando o Prompt  

1. Agora iremos adicionar um prompt base (template) no **Prompt Editor**. A skill já vem com um prompt de exemplo; vamos substituí-lo por um prompt mais aderente à nossa necessidade.
   ![](../images/2025-09-04-10-58-15.png)
2. Limpe o prompt de exemplo:
   ![](../images/2025-09-04-10-58-39.png)
3. Insira o seguinte prompt:  

   :::info Por que usar Markdown no prompt?
   A estrutura em seções (Role, Context, Rules, Output) melhora a interpretação pelo LLM e facilita a manutenção do prompt.
   :::

    ```
    ## Role
    You are a cross‑training assistant that suggests relevant, personalized training topics for employees.

    ## Context
    - Area of expertise: 
    - Tools used (comma‑separated text): 
    - Skills colleagues ask help for (comma‑separated text): 

    ## Rules
    1) Do not repeat existing topics (exact and fuzzy match; ignore case and accents).
    2) Prioritize suggestions that combine the provided area, tools, and skills.
    3) Each suggestion must be specific, practical, and useful to colleagues.
    4) Generate 4–6 suggestions.

    ## Output Format (Raw Text)
    For each suggestion, output one line in the format:
    - Title — brief explanation (1 sentence) — why it’s relevant (1 sentence)

    Example:
    - Automating Routine Tasks in ServiceNow — How to create simple flows for repetitive tasks — Relevant because many colleagues ask for basic automation help.
    ```

   ![](../images/2025-09-04-11-00-51.png)

4. Agora, precisamos adicionar os inputs dinâmicos ao prompt. Isso possibilita passar variáveis ao prompt antes de enviar à LLM.
5. Vamos adicionar os inputs que criamos dentro dos locais correspondentes no prompt.
6. Posicione o cursor após o texto `Area of expertise: `
   ![](../images/2025-09-04-11-04-45.png)
7. Clique em **Insert inputs** no canto superior direito.
   ![](../images/2025-09-04-11-05-16.png)
8. Clique em `area`.
   ![](../images/2025-09-04-11-05-46.png)
9. Veja que ele adicionou a tag `{{area}}` ao prompt.
    ![](../images/2025-09-04-11-06-36.png)
10. Faça o mesmo para os demais `tools` e `skills` respectivamente.
    ![](../images/2025-09-04-11-07-42.png)
    
    :::note Sobre tags `{{...}}`
    As tags `{{area}}`, `{{tools}}` e `{{skills}}` serão substituídas pelos valores fornecidos na execução do skill. Elas não são variáveis JavaScript, e sim placeholders do Skill Kit.
    :::
    

## 🛠️ Testando o Prompt  

1. Clique em **"Run Test"**.  
   ![](../images/2025-09-04-11-08-05.png)
2. Preencha os inputs de teste: 
    
   | Field  | Value                                      |
   |--------|--------------------------------------------|
   | **area**   | Customer Service                           |
   | **tools** | Excel, Power BI, ServiceNow                |
   | **skills** | Reporting, Automation, Documentation       |
   
   Clique em `Run test` 

   :::danger Observe com atenção!
      Cuidado! A **ordem dos inputs** pode ter mudado. 
   :::

   ![](../images/2025-09-04-11-10-59.png)
   
3. Execute o teste e valide se:  
   - As sugestões são **relevantes** para a área, ferramentas e habilidades.  
   - Nenhum tópico existente foi **repetido**.  
4. Vamos dar um nome ao prompt. Edite o campo clicando no lápis ao lado de **Prompt name**.
5. **Renomeie** para `Training Topic Prompt` e **Salve**.
   ![](../images/2025-09-04-11-19-32.png)
6. Ajuste o prompt se necessário e **Finalize Prompt** quando estiver satisfeito.  
   ![](../images/2025-09-04-11-20-03.png)

:::caution Resultados variam
Como toda geração com LLMs, pequenas variações de saída são normais entre execuções. Concentre-se em validar relevância e ausência de duplicatas; refine o texto do prompt se necessário.
:::


## 🛠️ Configurando a Skill  

1. Abra a guia **Skill Settings**.  
2. Acesse **Deployment Settings**. 
   ![](../images/2025-09-04-11-21-51.png)
3. Configure os seguintes campos:  

   - **Workflow:** Creator  
   - **Feature:** Create new feature  
   - **Name:** Training Topic Suggestions  
   - **Description:** Suggests personalized training topics.
  ![](../images/2025-09-04-11-24-02.png)

5. Selecione a opção:  ✅ Now Assist Panel 
   ![](../images/2025-09-04-11-25-38.png)

4. Clique em **"Save"**.  
   ![](../images/2025-09-04-11-24-24.png)

5. Clique em **"Publish"**, marque a opção **Default Prompt** e confirme.  
   ![](../images/2025-09-04-11-27-32.png)
   ![](../images/2025-09-04-11-27-46.png)



## 🎯 Conclusão  

Parabéns! 🎉  

Você criou e ativou uma **Custom Skill no ServiceNow Skill Kit** para **sugerir tópicos de treinamento personalizados** no **Now Assist**.  

🚀 Agora, você pode testar outras customizações (novos inputs, filtros na Tool, ajustes no prompt) e explorar novas possibilidades!  
