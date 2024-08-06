---
title: "Fluxo: Visão Geral" 
sidebar_label: "2. Fluxo"
pagination_label: "Fluxo" 
---

## Objetivo

Neste exercício, aprenderemos a implementar uma integração usando o **Spoke Generator**, criar uma **Tabela de Decisão** e como utilizá-las em nosso fluxo principal para adicionar processamento direto.

Amanda descobriu que o departamento financeiro pré-certificou funcionários para teletrabalho. No caso de transferências, as solicitações de teletrabalho devem ser automaticamente aprovadas. Esses dados não foram transferidos para a instância do ServiceNow, mas o departamento financeiro publicou uma OpenAPI que pode ser usada para consultar os dados dos funcionários com base no endereço de e-mail deles.

Os gerentes também informaram a Amanda que, quando os funcionários solicitam 3 dias ou menos de teletrabalho situacional, as solicitações podem ser automaticamente aprovadas.

## Nesta parte do exercício, faremos:

- Criar uma integração reutilizável com o departamento financeiro usando o **Spoke Generator**.
- Criar uma **Tabela de Decisão** para verificar se a solicitação de teletrabalho pode ser aprovada automaticamente.
- Modificar nosso Fluxo Principal para dispensar a aprovação do gerente se o funcionário foi pré-certificado para teletrabalho.

# Observações

 - 
