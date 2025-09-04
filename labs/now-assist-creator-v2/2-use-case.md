---
id: use-case
title: "Caso de Uso"
hide_table_of_contents: true
draft: false
---

<div class="button-homepage-vancouver">
🕒 Duração Estimada: 5 min
</div>

## 🎯 Visão Geral do Caso de Uso

**Alexandra** é gerente de treinamentos na organização ACME.

![](./img/image001.png)

Ela lidera um excelente programa de *cross-training*, permitindo que colaboradores se voluntariem para ensinar colegas sobre suas áreas de especialização.

Com o crescimento do programa, sua planilha e caixa de entrada não conseguem mais acompanhar a demanda por treinamentos.

O processo atual exige muitas tarefas manuais: manter uma lista estática de tópicos, depender de e‑mails em massa para notificações e não ter um processo padronizado de coleta de feedback.

Essas ineficiências resultam em:

- ⏳ **Tempo desperdiçado** com tarefas repetitivas, como criação de materiais e envio de e‑mails.
- 📣 **Comunicação inconsistente** entre instrutores e participantes.
- 📉 **Coleta limitada de dados** sobre a eficácia dos treinamentos, devido à ausência de automação no feedback.

Para resolver isso, **Alexandra** decidiu criar uma aplicação completa de *cross‑training*, com **workflows automatizados**, **padronização da gestão de treinamentos** e **comunicação eficiente** para sua equipe.

No entanto, o desenvolvimento tradicional exige muito código, atrasando o progresso devido à escassez de recursos técnicos e a ciclos de desenvolvimento prolongados — limitando a digitalização dos processos.

É aqui que entra o **Now Assist for Creator** da ServiceNow.

Essa solução usa o poder da **IA generativa** para acelerar a criação de aplicações e permitir que desenvolvedores cidadãos como **Alexandra** transformem sua visão em realidade rapidamente.

---

### 🧠 O que é Citizen Development?

O termo **Citizen Development** pode ter significados diferentes dependendo da audiência.

No contexto da ServiceNow, pense nele como uma questão de **permissões de usuário** e **governança**, e não apenas de **nível de experiência técnica**.

---

## 🧩 Como o lab resolve este caso

O laboratório guia você por três frentes complementares, alinhadas ao cenário da Alexandra:

- **Now Assist for Creator**: usar a IA para acelerar a criação do app de cross‑training
  - **App Generation** para iniciar o aplicativo com tabelas e formulários.
  - **Catalog Generation** para expor ações como itens de catálogo.
  - **Flow Generation** para automatizar tarefas recorrentes.
  - **Code Generation** e **UI Generation** para completar regras e interfaces.

- **Skill Kit**: criar a custom skill de sugestões
  - Skill “**Training Topic Suggestions**” sugere novos tópicos com base em `area`, `tools`, `skills` e evita duplicar tópicos existentes retornados por uma Tool (GlideRecord).

- **AI Agents**: transformar feedback em melhoria contínua
  - Agente “**Session Feedback Analyst**” analisa feedbacks de sessões e atualiza o campo “Session Notes” com recomendações.

:::note Observação
Nomes de recursos do sistema (ex.: “App Generation”, “Training Topic Suggestions”, “Session Feedback Analyst”) aparecem em inglês por refletirem a interface do produto.
:::

---

## ✅ Resultados esperados

- Um aplicativo de cross‑training funcional com dados, formulários e automações.
- Uma **Custom Skill** que sugere tópicos de treinamento personalizados, sem duplicatas.
- Um **AI Agent** que sintetiza feedbacks e registra recomendações diretamente na sessão.
