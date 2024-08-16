---
id: rpa-hub
title: "RPA Hub Workspace"
pagination_label: "3. RPA Hub Workspace"
sidebar_label: "3. RPA Hub Workspace"
hide_table_of_contents: true
draft: false
---

Na próxima etapa, realizaremos algumas tarefas administrativas dentro do Espaço de Trabalho do RPA Hub para ajudá-lo a se familiarizar com as várias configurações disponíveis. Faça login na instância atribuída a você usando as credenciais de administrador que recebeu ao reivindicar essa instância.

Clique em **Todos** (1), depois digite **RPA Hub** no filtro de navegação (2) e clique em **Espaço de Trabalho do RPA Hub**

![Texto alternativo](img/2023-10-02_08-41-05.png)

O Espaço de Trabalho do RPA Hub é onde você pode governar, gerenciar e supervisionar sua força de trabalho digital, tudo em um só lugar.

No canto superior esquerdo, clique no ícone 'hambúrguer' para acessar as listas disponíveis

![Texto alternativo](img/2023-10-02_08-44-35.png)

Clique em **Processo do Bot** (1), depois vá para **Atribuir Configuração** (Clique na pequena seta ao lado de **Criar Configuração**).

![Texto alternativo](img/2023-10-02_08-50-15.png)

Estamos agora criando um novo **Processo do Bot** a partir de uma **configuração do processo do bot** existente e, em seguida, preencheremos os campos restantes necessários

Marque a caixa (1) para selecionar o registro de **Configuração do Processo do Bot de Impressão de Crachás** e clique em **enviar** (2)

![Texto alternativo](img/2023-10-02_08-52-51.png)

> O registro de Configuração do Processo do Bot de Impressão de Crachás foi pré-carregado nessas instâncias de laboratório para economizar tempo, permitindo-nos nos concentrar rapidamente na construção do robô. Esses registros de configuração são valiosos para clientes com várias instâncias que precisam exportar configurações de uma instância para outra.

Esta aba deve abrir no espaço de trabalho, mostrando o registro do processo do bot. Atualize o campo **Nome** (1) para renomear o Processo do Bot, remova a configuração e clique em **Salvar** (2)

![Texto alternativo](<img/2023-10-02_08-57-01(1).png>)

Você deseja que o campo **nome** do Processo do Bot fique conforme mostrado:

![Texto alternativo](img/2023-10-02_08-59-55.png)

Agora que temos o novo registro do Processo do Bot de Impressão de Crachás criado, vamos preencher alguns campos importantes. Clique na aba **Aplicações de Negócio**

![Texto alternativo](img/2023-10-02_09-02-47.png)

> Nota: Este aspecto da configuração é de extrema importância. Na aba Aplicação de Negócio, estabelecemos uma relação entre o Processo do Bot e a automação RPA que estamos criando, conectando-o à Aplicação de Negócio específica que estamos automatizando. Essa configuração é armazenada no CMDB (Banco de Dados de Gerenciamento de Configuração), permitindo que os clientes mantenham sua equipe de Automação informada ao planejar mudanças nessas aplicações de negócios. Considere um cenário onde uma equipe está modificando a IU do Aplicativo de Badging enquanto outra equipe está automatizando-o. Outra vantagem de manter essa relação no CMDB é que, quando ocorre um incidente nesse aplicativo, ele pode ser correlacionado com erros potenciais na automação. Imagine se o aplicativo de negócios falhar; os robôs RPA podem parar de funcionar. Ter visibilidade sobre possíveis causas raiz pode ser extremamente valioso."

Clique em **Adicionar** para mapear a Aplicação de Negócio existente (do CMDB) para o Processo do Bot

![Texto alternativo](img/2023-10-02_09-11-02.png)

Selecione a **Impressão de Crachás** (1) Aplicação de Negócio e clique em **Adicionar** (2)

![Texto alternativo](img/2023-10-02_09-12-30.png)

Se você não ver a Aplicação de Negócio após adicioná-la, clique no botão de Atualizar conforme mostrado

![Texto alternativo](img/2023-10-02_09-13-57.png)

e você deve vê-la na aba Aplicação de Negócio conforme mostrado

![Texto alternativo](img/2023-10-02_09-15-03.png)

Vamos continuar com a configuração do processo do bot. Clique na aba **Conjunto de Credenciais** (1), depois clique em **Novo** (2)

![Texto alternativo](img/2023-10-02_09-17-26.png)

Mantenha essa aba aberta; precisamos recuperar informações adicionais que usaremos nesses campos

![Texto alternativo](<img/2023-10-02_09-19-27(1).png>)

Precisamos obter o hostname da Máquina Virtual Windows que foi atribuída a você. Curiosamente, é a mesma máquina que o MID Server implantado com sua instância

Clique em **Todos** (1), depois digite **mid** (2) no filtro de navegação, passe o mouse sobre **Servidores** e clique com o botão direito em **Abrir Link em uma nova Aba** (apenas para manter a página do processo do bot aberta)

![Texto alternativo](img/2023-10-02_09-21-44.png)

Na nova aba, copie o valor que você vê na coluna **Nome do Host** como mostrado para sua área de transferência. Além disso, anote o hostname, pois usaremos esse valor ao criar o registro do Robô.

![Texto alternativo](img/2023-10-02_09-25-17.png)

Então, volte para a guia **Credentials Set** no espaço de trabalho RPA.

No campo **Name**, cole o valor copiado anteriormente (nome do host do MID Server), e também no campo **Windows Username**, cole o valor do nome do host seguido de \Administrator.

No campo **Windows Password**, insira a senha fornecida quando você requisitou essa instância de laboratório e clique em **Save**.

![Alt text](<img/2023-10-02_09-28-16(1).png>)

Você deve ver uma tela como esta, com uma guia **Application Credentials** onde você define as Credenciais de Aplicativo usadas para o processo. (Aqui é onde armazenamos as credenciais para o robô se autenticar na interface do aplicativo de crachá.)

Clique em **Application Credentials**.

![Alt text](img/2023-10-02_09-31-27.png)

Em seguida, clique em **New**.

![Alt text](img/2023-10-02_09-33-12.png)

No formulário Criar Novas Credenciais de Aplicativo, use os seguintes valores e clique em **Save**:

| Campo | Valor |
|-------|-------|
| Name | Badging App Creds |
| Application Name | Badge Printing |
| User name | badgeadmin |
| Password | badgeadmin |

![Alt text](img/2023-10-02_09-37-28.png)

Precisamos criar um registro de Robô antes de continuar a configuração do processo de bot (normalmente você teria um pool existente de Robôs que pode atribuir a um processo de Bot, neste laboratório criamos o registro do Robô manualmente).

Clique no ícone de hambúrguer (1), depois clique em **Robots** (2) e clique em **New** (3).

> Nota: Na terminologia RPA do ServiceNow, o registro de Robô corresponde à máquina Windows na qual o agente de software RPA do ServiceNow executa um processo de bot. Ao definir o Robô no Processo de Bot, estamos configurando qual Máquina Virtual executará a automação.

![Alt text](img/2023-10-02_09-42-25.png)

No formulário, preencha os campos com os seguintes valores e clique em **Save**:

| Campo | Valor |
|-------|-------|
| Name | Badge Printing Robot |
| Machine Name | Nome do host copiado do registro do MID Server no passo anterior |
| Department | IT |
| Robot Type | Unattended |

![Alt text](img/2023-10-02_09-49-51.png)

> Nota: O campo Department permite segmentar todos os Relatórios RPA por departamento.

Volte para a página do Processo de Bot clicando na guia **Detail**.

![Alt text](img/2023-10-02_09-57-54.png)

Depois, clique na guia **Assigned Robots** (1) e clique em **Add** (2).

![Alt text](img/2023-10-02_09-59-14.png)

Selecione o registro **Badge Printing Robot** (1) e clique em **Add** (2).

![Alt text](img/2023-10-02_10-00-36.png)

Clique no botão de atualizar.

![Alt text](img/2023-10-02_10-01-50.png)

e certifique-se de que o registro do robô aparece como mostrado na guia **Assigned Robots**.

![Alt text](img/2023-10-02_10-02-47.png)

Agora, configure as Credenciais de Robô do Processo, que estão vinculadas ao conjunto de credenciais criado anteriormente no registro do Robô. Isso permite flexibilidade, acomodando diferentes robôs com conjuntos de credenciais distintos, embora alguns robôs também possam compartilhar as mesmas credenciais.

Clique em **Process Robot Credentials** (1) e depois em **New** (2).

![Alt text](img/2023-10-02_10-06-19.png)

No formulário **Create New Process Robot Credential**, no campo **Credentials Set** (1), comece a digitar 'IP-' deve retornar o nome do registro de Conjunto de Credenciais que criamos anteriormente, selecione-o (no caso, é o nome do seu servidor MID, na vida real podemos precisar encontrar uma melhor convenção de nomenclatura :-) ), em seguida, no campo **Robot** (2) procure por 'Badge Printing robot' e selecione-o e clique em **Save** (3).

![Alt text](img/2023-10-02_10-09-47.png)

Volte para a guia **Detail** para retornar aos detalhes do processo de bot, depois clique na guia **Queue**, se você não a vê, clique no botão **More**.

![Alt text](img/2023-10-02_10-14-48.png)

> Uma Queue é um repositório que pode conter um número ilimitado de itens de trabalho. Itens de trabalho podem armazenar múltiplos tipos de dados, como informações de transações, detalhes de clientes ou informações de um documento. As Queues são usadas em automações para distribuir dados transacionais ou a carga de trabalho entre diferentes robôs.

> Sua instância veio pré-configurada com uma Queue de Trabalho existente chamada 'Badge Printing'. Neste caso de uso, sempre que um visitante é pré-registrado e aprovado para receber um crachá, um fluxo sem código (no Flow Designer) adiciona um Item de Queue de Trabalho aqui para passar os metadados e informações que o robô precisará para enviar a solicitação de impressão de crachá.

Clique no registro de Queue de Trabalho **Badge Printing** para abrir e inspecionar.

![Alt text](img/2023-10-02_10-21-07.png)

Quando estiver no registro de Queue de Trabalho, clique na guia **Work Items** (1).

> Isso exibe os trabalhos pendentes, bem-sucedidos ou falhados. Itens de trabalho podem ser atribuídos a robôs por meio de um fluxo, ou você pode projetar sua automação RPA para agendar verificações regulares da queue para itens de trabalho pendentes, que são então atribuídos a robôs específicos.

Clique no registro de Item de Trabalho **VIS0001016** (2) para inspecionar.

![Alt text](img/2023-10-02_10-22-45.png)

Revise as diferentes informações disponíveis nesse registro, observe as Ações UI 'Mark as complete' ou 'Reassign', não clique nesses botões, por favor.

![Alt text](img/2023-10-02_10-30-37.png)

Role para baixo até ver o campo 'Request Content'. Este campo contém os metadados necessários pelo Robô para entrada de dados no aplicativo web de Badging. Neste caso de uso, um desenvolvedor do ServiceNow cria este item de trabalho a partir de um fluxo e inclui os metadados. Preste atenção no 'Response Content'; o Robô pode fornecer uma resposta ou informação que pode ser lida por um fluxo na plataforma.

Quando estivermos construindo a automação RPA, um dos primeiros passos será selecionar esse item da queue e recuperar os metadados.

Terminamos de configurar o Processo de Bot RPA no RPA Hub; agora, precisamos construir a automação RPA associada a esse Processo de Bot.
