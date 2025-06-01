---
id: rpa-hub
title: "RPA Hub Workspace"
pagination_label: "1. RPA Hub Workspace"
sidebar_label: "1. RPA Hub Workspace"
hide_table_of_contents: true
draft: false
---

Na próxima etapa, realizaremos algumas tarefas administrativas dentro do Espaço de Trabalho do RPA Hub para ajudá-lo a se familiarizar com as várias configurações disponíveis. Faça login na instância atribuída a você usando as credenciais de administrador que recebeu ao reivindicar essa instância.

1. Clique em **All** (1), depois digite **RPA Hub** no filtro de navegação (2) e clique em **RPA Hub Workspace**

   ![Texto alternativo](./img/2023-10-02_08-41-05.png)

2. O Espaço de Trabalho do RPA Hub é onde você pode governar, gerenciar e supervisionar sua força de trabalho digital, tudo em um só lugar.

    No canto superior esquerdo, clique no ícone 'hambúrguer' para acessar as listas disponíveis

   ![Texto alternativo](./img/2023-10-02_08-44-35.png)

3. Acesse a opção da lista **Administration > Robots** e clique em **New** 
   ![](./images/2024-12-11-21-36-39.png)

4. Copie o IP da sua Instância Windows na página de Reserva
   ![](./images/2024-12-11-21-41-52.png)

5. Preencha as informações correspondetes e clique em **Save**

    | Campo | Valor |
    |-------|-------|
    | (1) Name | Badge Printing Robot |
    | (2) Robot Type | Unattended |
    | (3) Machine Name | ***<IP da sua Instância Windows>*** |
    | (4) User | System Administrator |
    | (5) Department | IT |

   ![](./images/2024-12-11-21-44-07.png)

6. Antes de fechar a aba, clique na Guia **Assidned Studio Users** e **Add** 
   ![](./images/2024-12-10-23-27-51.png)

7. Selecione o usuário **System Administrator** e clique em **Add (1)**
   ![](./images/2024-12-10-23-28-46.png)

8. Feche a Aba `Badge Printing Robot` e retorne para `List`
   ![](./images/2024-12-10-23-30-08.png)

9. Acesse a sessão **Credential Management**. Clique em **Robot Credentials**.
   ![](./images/2024-12-10-22-07-29.png)

10. Clique em **New** para criar uma nova credencial de robô.
   ![](./images/2024-12-10-22-08-20.png)

11. Vamos adicionar as credenciais do nosso servidor Windows Server do seu laboratório.

   ![](./images/2024-12-10-22-19-53.png)

12. Preencha conforme as informações a seguir:

    | Campo | Valor |
    |-------|-------|
    | (1) Name | Badging Robot Creds |
    | (2) User name | Administrator |
    | (3) Password | *<Password da sua instância>* |

13. Copie as informações da sua instância:
   ![](./images/2024-12-10-22-21-03.png)

14. Preencha as informações correspondentes
   ![](./images/2024-12-10-22-19-15.png)

15. Feche a aba e `Badging Robot Creds` retorne para a aba `List`.
   ![](./images/2024-12-10-22-23-26.png)

16. Agora vamos adicionar as credenciais da aplicação. Clique em **Application Credencials** e **New**
   ![](./images/2024-12-10-22-24-14.png)

17. Preencha conforme as informações a seguir:

   ![](./images/2024-12-10-22-25-48.png)

    | Campo | Valor |
    |-------|-------|
    | (1) Name | Badging App Creds |
    | (2) Application Name | Badge Printing |
    | (3) User name | badgeadmin |
    | (4) Password | badgeadmin |

18. Clique no botão **Save**

   ![](./images/2024-12-10-22-28-16.png)

19. Feche a aba `Badging App Creds` e retorne para `List`

   ![](./images/2024-12-10-22-29-27.png)

20. Por último vamos criar um grupo de credenciais. Clique em **Credential Groups** e **New**

   ![](./images/2024-12-10-22-31-16.png)

21. Preencha conforme as informações a seguir:

   ![](./images/2024-12-10-22-33-14.png)

    | Campo | Valor |
    |-------|-------|
    | (1) Name | Badging App Credential Group |
    | (2) Robot Credential | Badging Robot Creds |

22. Clique em **Save**.

23. Antes de fechar, clique na aba **Application Credential**
   ![](./images/2024-12-11-16-36-21.png)

24. Clique em **Add**
   ![](./images/2024-12-11-16-36-48.png)

25. Selecione a credencial **Badging App Creds** e clique em **Add (1)**
   ![](./images/2024-12-11-16-37-45.png)

26. Fecha a aba `Badging App Credential Group`

27. Retorne para a lista **Build > Processo do Bot** (1), depois vá para **Atribuir Configuração** (Clique na pequena seta ao lado de **Criar Configuração**).

   ![Texto alternativo](./img/2023-10-02_08-50-15.png)

28. Estamos agora criando um novo **Processo do Bot** a partir de uma **configuração do processo do bot** existente e, em seguida, preencheremos os campos restantes necessários

    Marque a caixa (1) para selecionar o registro de **Configuração do Processo do Bot de Impressão de Crachás** e clique em **enviar** (2)

   ![Texto alternativo](./img/2023-10-02_08-52-51.png)

    > O registro de Configuração do Processo do Bot de Impressão de Crachás foi pré-carregado nessas instâncias de laboratório para economizar tempo, permitindo-nos nos concentrar rapidamente na construção do robô. Esses registros de configuração são valiosos para clientes com várias instâncias que precisam exportar configurações de uma instância para outra.

29. Esta aba deve abrir no espaço de trabalho, mostrando o registro do processo do bot. Atualize o campo **Nome** (1) para renomear o Processo do Bot, remova a configuração e clique em **Salvar** (2)

   ![Texto alternativo](<./img/2023-10-02_08-57-01(1).png>)

30. Você deseja que o campo **nome** do Processo do Bot fique conforme mostrado:

   ![Texto alternativo](./img/2023-10-02_08-59-55.png)

31. Agora que temos o novo registro do Processo do Bot de Impressão de Crachás criado, vamos preencher alguns campos importantes. Clique na aba **Aplicações de Negócio**

   ![Texto alternativo](./img/2023-10-02_09-02-47.png)

    > Nota: Este aspecto da configuração é de extrema importância. Na aba Aplicação de Negócio, estabelecemos uma relação entre o Processo do Bot e a automação RPA que estamos criando, conectando-o à Aplicação de Negócio específica que estamos automatizando. Essa configuração é armazenada no CMDB (Banco de Dados de Gerenciamento de Configuração), permitindo que os clientes mantenham sua equipe de Automação informada ao planejar mudanças nessas aplicações de negócios. Considere um cenário onde uma equipe está modificando a IU do Aplicativo de Badging enquanto outra equipe está automatizando-o. Outra vantagem de manter essa relação no CMDB é que, quando ocorre um incidente nesse aplicativo, ele pode ser correlacionado com erros potenciais na automação. Imagine se o aplicativo de negócios falhar; os robôs RPA podem parar de funcionar. Ter visibilidade sobre possíveis causas raiz pode ser extremamente valioso."

32. Clique em **Adicionar** para mapear a Aplicação de Negócio existente (do CMDB) para o Processo do Bot

   ![Texto alternativo](./img/2023-10-02_09-11-02.png)

33. Selecione a **Impressão de Crachás** (1) Aplicação de Negócio e clique em **Adicionar** (2)

   ![Texto alternativo](./img/2023-10-02_09-12-30.png)

34. Se você não ver a Aplicação de Negócio após adicioná-la, clique no botão de Atualizar conforme mostrado

   ![Texto alternativo](./img/2023-10-02_09-13-57.png)

    e você deve vê-la na aba Aplicação de Negócio conforme mostrado

   ![Texto alternativo](./img/2023-10-02_09-15-03.png)

35. Vamos continuar com a configuração do processo do bot. Clique na aba **Process Credential Mappings** (1), depois clique em **Add** (2)

   ![](./images/2024-12-10-22-36-56.png)

36. Selecione o Credential Group **Badging App Credential Group** e clique em **Add (1)**

   ![](./images/2024-12-10-22-37-39.png)

37. Atualize a lista para verificar se foi adicionada a lista.

   ![](./images/2024-12-10-22-39-33.png)

38. Depois, clique na guia **Assigned Robots** (1) e clique em **Add** (2).

   ![Alt text](./img/2023-10-02_09-59-14.png)

39. Selecione o registro **Badge Printing Robot** (1) e clique em **Add** (2).

   ![Alt text](./img/2023-10-02_10-00-36.png)

40. Clique no botão de atualizar.

   ![Alt text](./img/2023-10-02_10-01-50.png)

41. Clique em **Process Robot Credentials** (1) e depois em **New** (2).

   ![Alt text](./img/2023-10-02_10-06-19.png)

42. No formulário **Create New Process Robot Credential**, no campo **Credentials Group** (1), preencha com `Badging App Credential Group`, em seguida, no campo **Robot** (2) procure por `Badge Printing robot` e selecione-o e clique em **Save** (3).

   ![](./images/2024-12-10-22-44-51.png)

43. Atualize para carregar o registro adicionado.

   ![](./images/2024-12-10-22-47-42.png)

44. Agora, clique na guia **Queue**, se você não a vê, clique no botão **More**.

   ![Alt text](./img/2023-10-02_10-14-48.png)

    > Uma Queue é um repositório que pode conter um número ilimitado de itens de trabalho. Itens de trabalho podem armazenar múltiplos tipos de dados, como informações de transações, detalhes de clientes ou informações de um documento. As Queues são usadas em automações para distribuir dados transacionais ou a carga de trabalho entre diferentes robôs.

    > Sua instância veio pré-configurada com uma Queue de Trabalho existente chamada 'Badge Printing'. Neste caso de uso, sempre que um visitante é pré-registrado e aprovado para receber um crachá, um fluxo sem código (no Flow Designer) adiciona um Item de Queue de Trabalho aqui para passar os metadados e informações que o robô precisará para enviar a solicitação de impressão de crachá.

45. Clique no registro de Queue de Trabalho **Badge Printing** para abrir e inspecionar.

   ![Alt text](./img/2023-10-02_10-21-07.png)

46. Quando estiver no registro de Queue de Trabalho, clique na guia **Work Items** (1).

    > Isso exibe os trabalhos pendentes, bem-sucedidos ou falhados. Itens de trabalho podem ser atribuídos a robôs por meio de um fluxo, ou você pode projetar sua automação RPA para agendar verificações regulares da queue para itens de trabalho pendentes, que são então atribuídos a robôs específicos.

47. Clique no registro de Item de Trabalho **VIS0001016** (2) para inspecionar.

   ![Alt text](./img/2023-10-02_10-22-45.png)

48. Revise as diferentes informações disponíveis nesse registro, observe as Ações UI 'Mark as complete' ou 'Reassign', não clique nesses botões, por favor.

   ![Alt text](./img/2023-10-02_10-30-37.png)

49. Role para baixo até ver o campo 'Request Content'. Este campo contém os metadados necessários pelo Robô para entrada de dados no aplicativo web de Badging. Neste caso de uso, um desenvolvedor do ServiceNow cria este item de trabalho a partir de um fluxo e inclui os metadados. Preste atenção no 'Response Content'; o Robô pode fornecer uma resposta ou informação que pode ser lida por um fluxo na plataforma.

    Quando estivermos construindo a automação RPA, um dos primeiros passos será selecionar esse item da queue e recuperar os metadados.

Terminamos de configurar o Processo de Bot RPA no RPA Hub; agora, precisamos construir a automação RPA associada a esse Processo de Bot.
