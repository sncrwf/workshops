---
id: introduction
title: "Introdução"
pagination_label: "1. Introdução"
sidebar_label: "1. Introdução"
hide_table_of_contents: true
draft: false
---

## RPA

A Automação de Processos Robóticos (RPA) é uma tecnologia transformadora que revolucionou a maneira como as empresas lidam com tarefas repetitivas e baseadas em regras. Envolve o uso de robôs de software ou "bots" para automatizar essas tarefas, permitindo que as organizações alcancem maior eficiência, precisão e produtividade. O RPA Hub é a tecnologia de RPA da ServiceNow que possibilita a automação de ponta a ponta para sua organização. Com uma combinação de interações de UI e automações baseadas em elementos que interagem entre as várias aplicações empresariais, você pode emular ações do usuário e eliminar atividades humanas mundanas e repetitivas. Qualquer automação RPA da ServiceNow pode ser acionada a partir de qualquer Workflow na Plataforma ServiceNow, permitindo automatizar coisas que não têm protocolo disponível, como REST API, SOAP, ssh, powershell, etc.

## Objetivo

Neste laboratório, automatizaremos a tarefa de impressão de crachás de visitante. Colocaremos uma ênfase especial nas capacidades de gravação que podem capturar ações de seus aplicativos de desktop ou web e convertê-las em um fluxo de automação usando a opção de gravação no aplicativo RPA Desktop Design Studio. Quando você grava uma automação, não precisará criá-la manualmente usando conectores ou componentes. Isso é especialmente útil para novos usuários que nunca construíram um projeto RPA. Além disso, revisaremos alguns aspectos administrativos do RPA Hub dentro do Workspace dedicado ao RPA Hub, incluindo a configuração do processo do Bot e a gestão das credenciais necessárias.

## Caso de Uso

A ACME Inc. tem um mandato para automatizar o máximo possível dentro de sua organização para impulsionar a eficiência e reduzir custos. Eles identificaram o processo de 'Acesso de Visitantes' como altamente repetitivo e laborioso. Como membro do Centro de Excelência em Automação da ACME Inc., você foi contatado para automatizar a tarefa de um agente de segurança imprimindo um crachá de visitante.

O requisito é que essa automação possa ser acionada por um workflow do ServiceNow. A ACME Inc. está usando o ServiceNow para modernizar a experiência de seus funcionários e clientes e para orquestrar a automação de ponta a ponta.

O Aplicativo de Badging é um aplicativo baseado na web e não possui uma API. Os agentes recebem informações dos visitantes por e-mail e, em seguida, acessam a interface da web para preencher o formulário de Impressão de Crachá, o que resulta em muitos erros manuais, digitação incorreta e atraso para os visitantes que esperam pelo seu crachá.
