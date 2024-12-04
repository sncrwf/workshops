---
title: "Criar People Finder Spoke" 
sidebar_label: "1. Criar People Finder Spoke"
hide_table_of_contents: false
---
# Create People Finder Spoke

:::info  
**PULE ESTA SESSÃO CASO VOCÊ JÁ TENHA REALIZADO A ATIVIDADE BÔNUS DO LAB CASOS DE TELETRABALHO NÍVEL 1.**
:::

Um *spoke* é um aplicativo escopado contendo conteúdo do Flow Designer dedicado a um aplicativo ou tipo de registro específico. Isso inclui integrações que conectam sistemas ou serviços externos com a plataforma ServiceNow. Ao utilizar *spokes*, as organizações podem estender as capacidades de sua instância ServiceNow e integrá-la com uma ampla gama de ferramentas e serviços externos, melhorando a automação, colaboração e eficiência em suas operações de TI e processos de negócios.

[Clique aqui para saber mais sobre Spokes.](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/flow-designer/concept/spokes.html)

O Spoke Generator permite aos usuários criar *spokes* personalizados para integrar o ServiceNow com sistemas ou serviços externos. Ele fornece uma interface gráfica e um conjunto de ferramentas para simplificar o processo de construção, configuração e implantação de *spokes* adaptados a cenários específicos de integração.

[Clique aqui para saber mais sobre Spoke Generator.](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/flow-designer/concept/spoke-builder.html)

Vamos criar uma integração reutilizável com a Open API de People Finder do departamento financeiro, para que possamos acessar esses dados em nosso fluxo principal.

## Abrir o Flow Designer para usar o Spoke Generator para criar a Integração People Finder

1. Vá para a guia com a Página Inicial do Admin do ServiceNow (seu título pode ser diferente).  
![](./images/04-1-return-to-admin-page.png)

2. Abra o Flow Designer no menu All

   >1. Clique no menu **All**
    
   >2. Procure por "flow designer"
    
   >3. Clique em: Process Automation > Flow Designer  
![](./images/04-2-flow-designer.png)

3. Crie um Novo Spoke

   >1. Clique em <span className="button-purple">Create new ▼</span>
   
   >2. Clique em "Spoke"  
![](./images//04-3-create-spoke.png)

4. Configure as Informações Gerais para o Spoke (💡 clique duas vezes para selecionar, copiar e colar no formulário).

   | |Nome do Campo                | Valor do Campo
   |-|------------------------------| --------------
   |<span className="large-number">➊</span>|Arraste e solte o ícone na pasta de arquivos telework_lab que baixamos anteriormente | people_finder.png
   |<span className="large-number">➋</span>|Spoke Name (App scope name will auto-populate) | People Finder
   |<span className="large-number">➌</span>|Description | API to find people in a remote system
   |<span className="large-number">➍</span>|Clique no botão <span className="button-purple">Create and continue</span>.  
![](./images/04-4-spoke-general-info.png)

5. Especifique como queremos construir nosso Spoke

   >1. Selecione OpenAPI Specification

   >2. Clique em <span className="button-purple">Continue</span>
![](./images/04-5-how-build-spoke.png)

6. Para a origem OpenAPI, clique em <span className="button-white-grey-border">Import new</span>  
![](./images/04-6-openapi-import-new.png)

7. Preencha o formulário com os seguintes valores (💡 clique duas vezes para selecionar, copiar e colar no formulário).

   | |Nome do Campo                | Valor do Campo
   |-|------------------------------| --------------
   |<span className="large-number">➊</span>|Import method | Import from URL
   |<span className="large-number">➋</span>|OpenAPI URL | https://low-code.guide/api-specs.json
   |<span className="large-number">➌</span>|Clique no botão <span className="button-purple">Import</span>.  
![](./images/04-7-import-new-openapi.png)

1. Para o alias de conexão, clique em <span className="button-white-grey-border">Create new</span>  
![](./images/04-8-connection-alias-create-new.png)

1. Preencha o formulário com os seguintes valores (💡 clique duas vezes para selecionar, copiar e colar no formulário).

   | |Nome do Campo                | Valor do Campo
   |-|------------------------------| --------------
   |<span className="large-number">➊</span>|Connection & Credential alias name | People Finder
   |<span className="large-number">➋</span>|Configuration Template for authentication | API Key Template
   |<span className="large-number">➌</span>|Clique no botão <span className="button-purple">Create alias and continue</span>.  
![](../images/2024-12-03-23-17-53.png)

1. Preencha o formulário com os seguintes valores (💡 clique duas vezes para selecionar, copiar e colar no formulário).

   | |Nome do Campo                | Valor do Campo
   |-|------------------------------| --------------
   |<span className="large-number">➊</span>|Connection Name | People Finder
   |<span className="large-number">➋</span>|Connection URL | https://low-code.guide/api
   |<span className="large-number">➌</span>|API Key | appkey
   |<span className="large-number">➍</span>|Clique no botão <span className="button-purple">Submit</span>.  
![](../images/2024-12-03-23-22-09.png)

2.  Para continuar, clique no botão <span className="button-purple">Generate operations</span>  
![](./images/04-10-generate-operations.png)

1.  Selecione as ações que deseja criar

   >1. Selecione todas as ações

   >2. Clique no botão <span className="button-purple">Publish(1) | ▼</span>  
![](./images/04-11-actions-to-create.png)

1.  Clique no link "GET /user" para visualizar a ação que acabamos de criar  
![](./images/04-12-get-user-action.png)

1.  Antes de podermos testar e usar nosso spoke, precisamos definir a URL Base para a Conexão.

   >Clique para expandir a etapa OpenAPI  
![](./images/04-13-expand-openapi-step.png)

1.  Clique no botão <span className="button-white-black-border-black">Test</span>  
![](./images/04-16-test-action.png)

1.  Teste a ação com o e-mail de David Loo (💡 clique duas vezes para selecionar, copiar e colar no formulário).

   | |Nome do Campo                | Valor do Campo
   |-|------------------------------| --------------
   |<span className="large-number">➊</span>|email | david.loo@example.com
   |<span className="large-number">➋</span>|Clique no botão <span className="button-purple">Run Test</span>.  
![](./images/04-17-test-actio-modal.png)

1.  Quando o teste for concluído, clique no link para visualizar os resultados da execução  
![](./images/04-18-test-action-complete.png)

1.  Clique no link RUNTIME VALUE  
![](./images/04-19-test-output.png)

1.  Revise os resultados JSON. Podemos alternar para a visualização formatada.

   >Clique no botão <span className="button-white-purple-border">Formatted</span>.
![](./images/04-20-action-json-new.png)

1.  Expanda a saída.
![](./images/04-21-expand-output.png)

1.  Revise os resultados JSON Formatados.

   > 1. Observe o valor <b>telework-certified</b>.

   > 2. Clique no botão <span className="button-white-purple-border">Close</span>
   ![](./images/04-22-formatted-json.png)

2.  Feche a guia Detalhes da Execução  
![](./images/04-21-close-execution-details.png)

1.  Feche o modal de Teste da Ação clicando no botão <span className="button-white-purple-border">Cancel</span>  
![](./images/04-22-close-test-action.png)

## Bônus: Explore Mais o Spoke Generator

Abra uma nova aba ou janela do navegador e explore o seguinte:
https://developer.opentext.com/imservices/products/contentstorageservice/apis/contentstorage

Por conta própria, crie um novo spoke usando o seguinte OpenAPI spec:
https://raw.githubusercontent.com/deflant/opentext-content-storage-swagger/main/opentext-content-storage-swagger.yaml
