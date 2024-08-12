---
id: overview
title: "Hub de Integração: Gerador de Spokes"
pagination_label: "Visão Geral"
sidebar_label: "Visão Geral"
hide_table_of_contents: true
draft: false
---

## Introdução

O IntegrationHub é o local central na plataforma para consumir, criar e gerenciar integrações na sua instância do ServiceNow. No caso de você estar buscando conectar um fluxo de trabalho a um sistema externo, mas o ServiceNow ou os parceiros tecnológicos do ServiceNow não oferecem uma integração pronta (Spoke) para isso, você pode facilmente criar a sua própria. O IntegrationHub fornece numerosos Passos de Ação para conectar seu fluxo de trabalho a sistemas externos que utilizam protocolos como REST, PowerShell, SSH, etc. Neste laboratório, focaremos na integração REST.

## Objetivo

Neste laboratório, vamos mostrar a nova capacidade de "Gerador de Spokes". Esse recurso permite gerar novos spokes e ações de spoke para APIs de terceiros que seguem a especificação OpenAPI. Você usará um arquivo YAML fornecido.

:::note
Um arquivo YAML para especificações OpenAPI é um arquivo de configuração amigável ao usuário que define a estrutura, endpoints e detalhes de uma API RESTful. Facilita para os desenvolvedores documentarem e comunicarem o design da API. O gerador de spoke pode utilizar automaticamente este arquivo YAML para criar ações de spoke.
:::

Este recurso inovador, o "Gerador de Spokes", reduz significativamente o tempo necessário para criar uma nova integração.
