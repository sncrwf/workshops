---
id: introduction
title: 1. Introdução
hide_table_of_contents: true
draft: false
---

## Visão Geral

Automatize seus fluxos de trabalho baseados em documentos com o **Document Intelligence**. Não deixe que fluxos de trabalho de processamento de documentos baseados em OCR de múltiplas páginas atrapalhem suas iniciativas de transformação digital. Participe deste laboratório prático para tornar seus fluxos de trabalho mais inteligentes usando o **Document Intelligence** do ServiceNow. Antes do **Document Intelligence**, os fluxos de trabalho exigiam que humanos processassem documentos manualmente. Hoje, usando o **Document Intelligence**, aprenderemos a automatizar totalmente processos inteiros, preencher automaticamente campos com valores previstos de alta confiança e extrair dados com processamento direto habilitado por IA para tipos de documentos frequentemente processados.

## Objetivos do Laboratório

Você alcançará os seguintes objetivos:

- Compreender os casos de uso e as melhores práticas para extração de documentos
- Configurar um caso de uso do **Document Intelligence** e sua integração
- Compreender as etapas para alcançar a automação total de um fluxo de trabalho

## Cenário

Somos parte de um grande departamento de TI na ACME lidando com um número significativo de faturas para equipamentos de TI que precisam ser analisadas manualmente.

Após revisar nosso processo manual de extração de informações das faturas, decidimos usar o **Document Intelligence** para automatizar essas tarefas. Primeiro, configuramos o caso de uso e, em seguida, configuramos as integrações no **Flow Designer**. Em seguida, processaremos nossas primeiras tarefas para treinar o modelo.

Agora, os solicitantes podem enviar faturas para extração e os agentes utilizam o processo assistido por IA para extrair valores. Os valores são armazenados na **Now Platform** para relatórios, auditoria e automação.

Após processar várias faturas, a IA preenche automaticamente os valores para revisão pelo agente.

## 🚀 Lista de Verificação para Decolagem 

Antes de iniciar os exercícios do laboratório, você deve ter o seguinte:

1. Acesso (URL e credenciais) a uma instância de laboratório ServiceNow.  
   :::info 
   Caso não tenha recebido uma instância, peça a seu instrutor.
   :::
2. Baixe os arquivos do laboratório: **[Docintel.zip](./downloads/Docintel.zip)**

3. Extraia o arquivo do laboratório e verifique se você tem os seguintes arquivos:
    1. 🖼️ `spoke_icon.png`
    2. 📁 `Invoices`
       1. 📄 `Invoice for Cyberlink.pdf`
       2. 📄 `Invoice for Lexmark.pdf`
       3. 📄 `Invoice for Visio.pdf`

   :::danger 
   Não se esqueça de extrair o zip. O uso do arquivo compactado pode gerar problemas durante o lab.
   :::