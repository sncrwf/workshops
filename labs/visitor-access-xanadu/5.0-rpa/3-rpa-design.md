---
id: 3-rpa-design
title: "Introdução ao RPA Design Studio"
pagination_label: "3. RPA Design Studio"
sidebar_label: "3. RPA Design Studio"
hide_table_of_contents: true
draft: false
---

O Robotic Process Automation (RPA) Desktop Design Studio é um Ambiente de Desenvolvimento Integrado (IDE) low-code onde você pode projetar ou configurar fluxos de trabalho de automação RPA arrastando e soltando componentes na superfície de design. O RPA Desktop Design Studio é um aplicativo nativo do Windows.

Dê um duplo clique no ícone do RPA Desktop Design Studio na área de trabalho do Windows

![Texto alternativo](../img/2023-10-02_11-03-24.png)

Na janela pop-up **Connection Manager**, preencha os campos com as informações abaixo

   | Campo | valor |
   |-------|-------|
   | Nome | Minha Instância de Laboratório |
   | URL | Digite a URL da sua instância de laboratório, incluindo http:// |
   | Marcar como Padrão | Marque a caixa |
   | Abrir no navegador padrão | Marque a caixa |

![Texto alternativo](../img/2023-10-02_11-05-55.png)

Depois clique em **Proceed** (5)

Na primeira vez que o Studio é aberto, pode levar um minuto para carregar todos os componentes necessários

![Texto alternativo](../img/2023-10-02_11-12-08.png)

Faça Login com a suas credencias da instância.

![](../images/2024-12-10-23-04-03.png)

Click em `Open UTL.RPA.HOST`

![](../images/2024-12-10-23-04-44.png)

Antes de fechar o Google Chrome, digite `chrome://extensions` na barra de URL e pressione Enter. Certifique-se de que a extensão ServiceNow RPA Chrome esteja habilitada; é necessária para que o Robô interaja com o Google Chrome

![Texto alternativo](../img/2023-10-02_11-43-52.png)

Se você não ver a Extensão ServiceNow RPA Chrome, vá para a loja do Google Chrome e instale-a como mostrado abaixo:

![Texto alternativo](<../img/2023-10-04_08-23-23(1).gif>)

Você verá a tela de de boas-vindas do RPA Desktop Design Studio.

![](../images/2024-12-10-23-08-45.png)

Para este lab iremos utilizar um projeto de automação já criado, na pasta extraída do laboratório contém um arquivo com extensão .ibot que será importado para o Design Studio. Caso precise baixar novamente utilize o link: **[Badge_Printing_RPA_automation.iBot](../downloads/Badge_Printing_RPA_automation.iBot)**

No RPA Desktop Design Studio, acesse **Automation project** e selecione **Open local project**
![](../images/2024-12-10-23-17-35.png)

Busque pelo arquivo `Badge Printing RPA automation.ibot` e clique em **Open**

![](../images/2024-12-10-23-19-01.png)

Vamos navegar um pouco pela estrutura do projeto para entender o seu funcionamento.
![](../images/2024-12-10-23-21-37.png)


Agora que exploramos um pouco o projeto vamos testá-la para verificar se tudo está correto.

Antes de testá-la, vamos garantir que o Studio esteja conectado à instância seguindo estas etapas. Não se esqueça de atribuir também o processo do Bot, conforme mostrado:

![Alt text](../img/2023-10-03_13-00-40(1).gif)

Clique no botão **Run** no Studio para testá-la!

![Alt text](../img/2023-10-03_13-21-45(2).gif)

Se você se conectar ao espaço de trabalho RPA Hub e inspecionar o Work Item da fila, você deverá ver seu status como 'Success'. Seu desenvolvedor ServiceNow pode então aproveitar essa atualização como um gatilho no Flow Designer para acionar outras etapas do processo, mas a entrada de dados na aplicação de badging legada agora está automatizada com o RPA Hub!

![Alt text](../img/2023-10-03_13-26-22(1).gif)

:::info
Caso precise retestar o processo ou houve erro durante a execução no passo de `Queue` no RPA Design Studio. Não se preocupe, isso é por que nesse momento possuimos apenas um único item na fila e nosso critério é buscar por itens com status *Pending*.

Para resolver isso, volte para a tela do RPA Hub na plataforma ServiceNow e clique na guia **Queue** do seu Bot Process, se você não a vê, clique no botão **More**.

![Alt text](../img/2023-10-02_10-14-48.png)

Clique no registro de Queue de Trabalho **Badge Printing** para abrir e inspecionar.

![Alt text](../img/2023-10-02_10-21-07.png)

Clique no registro de Item de Trabalho **VIS0001016** (2) para inspecionar.

![Alt text](../img/2023-10-02_10-22-45.png)

Clique selecione o item da lista e clique em **'Reassign (1)'**

![](../images/2024-12-11-16-48-30.png)

Inclua qualquer comentário e clique em Reassign
![](../images/2024-12-11-16-49-36.png)

Pronto, seu Work Item já voltou para status `Pending` e você pode testar novamente no RPA Design Studio.
:::


Você concluiu com sucesso o laboratório!
