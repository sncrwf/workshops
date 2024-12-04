---
title: "Adicionar um playbook" 
sidebar_label: "1. Adicionar um playbook"
hide_table_of_contents: false
---
# Adicionando um playbook ao espaço de trabalho

A equipe de Amanda está crescendo e o espaço de trabalho que ela usa para gerenciar e relatar casos de teletrabalho agora é utilizado por mais de seus subordinados diretos. Ela percebeu que alguns desses subordinados nem sempre estão cientes do que validar nas solicitações e Amanda gostaria de uma forma para que qualquer pessoa que visualize os Casos de Teletrabalho seja orientada sobre o que procurar, garantir que o processo seja seguido e que todos os casos sejam tratados de forma igualitária.

A solução para isso é implementar um playbook no espaço de trabalho.

Playbooks permitem que os usuários do espaço de trabalho interajam com um fluxo de trabalho empresarial em tempo real a partir do Workspace. Agentes podem usar o Playbook para atualizar registros, carregar anexos e completar tarefas em várias atividades de fluxo de trabalho.
[Click Here for More Info](https://docs.servicenow.com/en-US/bundle/vancouver-build-workflows/page/administer/workspace/concept/playbook-ui.html)

Exemplo de um playbook em um espaço de trabalho:
![](./Playbook%20Images/example%20of%20a%20playbook%20in%20a%20workspace.jpg)

## Etapas para Adicionar um Playbook

|   | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span>| Projete seu playbook no Process Automation Designer |
    |<span className="large-number">➋</span>| Teste e Publique seu playbook |
    |<span className="large-number">➌</span>| Adicione o playbook ao seu espaço de trabalho no workspace builder |
    |<span className="large-number">➍</span>| Se você quiser alterar a ordem em que a aba aparece, use o UI Builder |

## Vamos começar

# Projete seu playbook no Process Automation Designer

1. 
  |   | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span>| Vá para 'All' |
    |<span className="large-number">➋</span>| Digite 'Process Automation Designer' |
    |<span className="large-number">➌</span>| Clique em 'Process Automation Designer' (isso abrirá em uma nova aba do seu navegador) |

  ![](./Playbook%20Images/go%20to%20all%20and%20click%20on%20process%20automation%20designer.jpg)

  Agora você está na visualização de lista do Process Automation Designer mostrando todos os processos que foram concluídos.

1. Clique em New > Playbook

  ![](../images/2024-12-03-23-46-42.png)

2. Dê um rótulo e uma descrição ao seu processo e crie um novo playbook
  (**observação: o nome da sua aplicação deve ser o nome da sua aplicação de Gerenciamento de Casos de Teletrabalho, pode ser diferente do que está na captura de tela**)

    | **Etapas**   | 
    |-------------|---------------------------------|
    | Playbook name | Telework Case Playbook |
    | Description | used to ensure completeness of telework cases, triggered when case is created  |
    | Application | Telework Case Management |


  ![](../images/2024-12-03-23-48-15.png)


1. Selecione um gatilho clicando em <span className="button-purple">Trigger</span>

    | Etapas | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span>| "Define your own conditions for when your process runs" |
    |<span className="large-number">➋</span>| Choose "Record Create" |
    |<span className="large-number">➌</span>| Choose Table "Telework Case" |
    |<span className="large-number">➍</span>| Clique em 'Done' |

  ![](../images/2024-12-03-23-52-39.png)

    
    Mude para 'Board View'

  ![](./Playbook%20Images/switch%20to%20board%20view.png)

Agora você deve estar nesta página:

![](./Playbook%20Images/Telework%20Case%20STAGE%201.png)

## Em seguida, adicionaremos 2 estágios

1. Adicionando o Primeiro Estágio

    | Etapas | 
    |-------------|---------------------------------|
    | Click | <span className="button-purple">+ Add Stage</span>  |
    | Label | Completeness of Request |
    | Description | ensure all the information is provided |
    | When to start | When process starts |
    | Click | 'Save and close' |

2. Adicionando o Segundo Estágio

    | Etapas | 
    |-------------|---------------------------------|
    | Click | <span className="button-purple">+ Add Stage</span> (next to the stage you created)  |
    | Label | Finalizing Request |
    | Description | ensure all approvals and tasks have been created and completed |
    | When to start | After specific stages |
    | Click | 'Save and close' |

Sua tela agora deve estar assim:

![](./Playbook%20Images/Telework%20Case%20Stage%202.png)

## Na Coluna 1, Completeness of Request, vamos adicionar 3 atividades  

 | Completeness of Request | 
    |-------------|---------------------------------|
    | Atividade &nbsp;<span className="large-number">➊</span>| Verifique se o opened_by tem um gerente, se o campo de motivo está preenchido e defina a prioridade |
    | Atividade &nbsp;<span className="large-number">➋</span>| Veja se o opened_by já tem casos de teletrabalho submetidos |
    | Atividade &nbsp;<span className="large-number">➌</span>| Dê ao usuário do espaço de trabalho o artigo de conhecimento das diretrizes de teletrabalho se ele quiser anexá-lo |



### **Completeness of Request – Atividade** <span className="large-number">➊</span>


1.  
    |  | 
    |-------------|---------------------------------|
    | Clique | <span className="button-purple">+ Add Activity</span> |

## \*\*Faça uma Pausa\*\* Explore a Tela de Atividade

- 'Search Activities'
- 'Create a new activity' – para saber mais sobre isso, [clique aqui](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/process-automation-designer/task/create-activity-definition.html)

_(as caixas foram contornadas com cores para diferenciá-las. Na sua instância, não haverá cor ao redor de cada seção)_

- Caixa vermelha: Estas são suas atividades agrupadas; no flow designer, seriam seus 'spokes'
- Caixa roxa: Em cada atividade agrupada, estão as atividades que você pode atribuir ao seu processo. Estas podem incluir atividades interativas e não interativas.
- Caixa verde: Para cada atividade, esta caixa descreve as informações necessárias para que a atividade funcione.
![](./Playbook%20Images/Add%20activity%20screen.jpg)

Mais informações, [Clique Aqui](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/process-automation-designer/task/create-process-definition.html)

## \*\*De volta ao Laboratório e Adicionando Atividade 1\*\*

Observação: Estaremos usando o pacote 'Common Activities'. Sinta-se à vontade para ver o que há em 'Global' e 'Process Automation Content' para ideias sobre o que mais você pode adicionar a um playbook.

2.  
    | Escolha | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span>| Common Activities |
    | <span className="large-number">➋</span>| User Form |

  Você deve estar aqui agora:

  ![](./Playbook%20Images/Telework%20Stage%202-5.jpg)

<br/>
No lado direito, estão as propriedades da atividade. Aqui é onde fornecemos as informações necessárias para que a atividade funcione.
<br/>
<br/>

3. Preencha o formulário (Editar propriedades da atividade):

  | Escolha | 
    |-------------|---------------------------------|
    | Label | Review Form |
    | Description | Check the requestor has a manager, the reason field is filled out and the priority is set to correct level. |
    | Clique | `UI Layout` TAB (Não clique em 'Save and Close') |

  ![](./Playbook%20Images/Telework%20Case%20Stage%203.png)

<br/>
<br/>

4. Esta atividade possui algumas entradas necessárias

    | Escolha | 
    |-------------|---------------------------------|
    | Associated table | Telework Case |
    | Associated record | use o data pill picker para escolher o registro trigger |
    | Form Fields | **Escolha os campos:** opened\_by,justification,priority |
    | Click | <span className="button-purple">Save and close</span> |

  ![](../images/2024-12-04-00-00-56.png)

Antes de prosseguir, vamos testar para que você possa ver como tudo ficará para o usuário do workspace.

Clique em 'Test' no canto superior direito próximo a ativar: <span className="button-purple">Test</span>

1. 
    | TESTE | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Escolha o registro de Telework Case – as imagens abaixo usarão TEL0001002 |
    | <span className="large-number">➋</span> | Clique em <span className="button-purple">Run Test</span> |

  ![](./Playbook%20Images/Run%20Test.jpg)

2. Escolha a 'Playbook preview' – clique em: View (isso abrirá em uma nova aba do navegador)  
  ![](./Playbook%20Images/Run%20Test%20Choose%20View.jpg)

  Dê um momento para esta tela carregar – quando terminar, deve se parecer com isto:

  ![](./Playbook%20Images/Telework%20Case%20Stage%207.jpg)  

3. Tente adicionar algo para 'Justification' depois 'Update' e então 'Mark Complete'  

4. No canto inferior direito há uma engrenagem – você pode abrir isso e tentar algumas das configurações adicionais. Estas podem ser configuradas na aba de experiência para seu playbook (não faremos isso neste laboratório).

5. Se tudo estiver certo, você pode fechar esta aba do navegador e então clicar em <span className="button-purple">Done</span> e você deverá voltar ao designer de playbook aqui:

  ![](./Playbook%20Images/Telework%20Case%20Stage%206.jpg)  


### **Completeness of Request – Atividade <span className="large-number">➋</span>**

Após o usuário do workspace revisar o formulário, gostaríamos que ele visse uma lista de quaisquer casos de teletrabalho que já foram abertos pelo solicitante. Essa será nossa próxima atividade – adicionar uma lista de casos de teletrabalho abertos pelo solicitante.

1.  
    | Abaixo de 'Review Form'  | 
    |-------------|---------------------------------|
    | Clique | <span className="button-purple">+ Add Activity</span>  |

2.  
    | Escolha | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Process Automation Content |
    | <span className="large-number">➋</span> | Show list of records |

  ![](./Playbook%20Images/2nd%20Activity%20pick%20activity.jpg)

3. Na 'Edit activity properties' no lado direito

  |   | 
    |-------------|---------------------------------|
    | Label | Requestors Telework Case |
    | Description | If the requestor has submitted any other telework case requests, they will be listed below |
    | Clique | <span className="button-purple">UI Layout</span> |

  ![](./Playbook%20Images/Telework%20Case%20Stage%209.jpg)  

4. Preencha a aba 'UI Layout'

  |   |   
    |-------------|---------------------------------|
    | List Title | Requestors Case |
    | Table | Telework Case |
    | Columns | Number,state,created,opened_by |
    | Clique  | 'Add Condition' ao lado de 'List Query' |

  Condição: opened_by  é  opened_by            
  <br/>
  'Add Condition' deve parecer assim (então clique em <span className="button-purple">Save / Modify</span> ):
  
  ![](./Playbook%20Images/2nd%20Activity%20is%20opened%20by.jpg)
  
  **Antes** de clicar em 'Save and close', seu formulário deve parecer com isto:
  
  ![](./Playbook%20Images/Telework%20Case%20Stage%208.jpg)  

5.  
  |  | 
    |-------------|---------------------------------|
    | Clique | <span className="button-purple">Save and Close</span> |

  ![](./Playbook%20Images/Telework%20Case%20Stage%2010.jpg)  


### **Completeness of Request – Atividade <span className="large-number">➌</span>**


A última atividade nesta coluna será mostrar ao usuário do workspace o artigo de conhecimento sobre diretrizes de teletrabalho – muitos pediram para ter isso à mão caso precisem durante o processo ou para anexar para revisão do solicitante.

1.  
    | Abaixo de 'Requestors Telework Cases'  | 
    |-------------|---------------------------------|
    | Clique | <span className="button-purple">+ Add Activity</span>  |

2.  
    | Escolha | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Common Activities |
    | <span className="large-number">➋</span> | Show Knowledge Article |

  ![](./Playbook%20Images/3rd%20Activity%20Show%20KA.jpg)

3. Na 'Edit activity properties' no lado direito

  |   | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span>  Label | Show Telework Guidelines KA |
    | <span className="large-number">➋</span>  Description | This will give the requestor the telework guidelines knowledge article so they can use it if needed in the process |
    | <span className="large-number">➌</span>  Start rule | When stage starts (we want this to be available right away) |
    | <span className="large-number">➍</span>  Click | Automation Tab (next to details tab) |

  ![](./Playbook%20Images/Telework%20Case%20Stage%2011.jpg)  

4. Preencha a aba 'Automation'

  |   | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> Título | Telework VPN Guidelines |
    | <span className="large-number">➋</span> Artigo de Conhecimento | KB0000008 |
    | <span className="large-number">➌</span> Clique | <span className="button-purple">Save and Close</span> |

  ![](../images/2024-12-04-00-10-46.png)


Ótimo – seu processo deve se parecer com isto agora:

![](./Playbook%20Images/Telework%20Case%20Stage%2013.jpg)

##
**Se você encontrar um erro relacionado a uma 'conexão de fim' para o passo 2**  
- Vá para 'Diagram View'  
- Conecte a Atividade 1.2 ao Estágio 2  
- Deve se parecer com isto:  

![](./Playbook%20Images/Telework%20Case%20Stage%2014.jpg)  
- depois volte para a visualização em painel  

## Sinta-se à vontade para fazer uma pausa e testar seu processo como fizemos anteriormente

<br/>
<br/>

## Finalizando a Etapa 'Finalizing Request'

Para a segunda coluna, etapa 'Finalizing Request', vamos adicionar apenas uma atividade.

1. **Adicionar Atividade**

   - Na coluna 'Finalizing Request':

     |  | 
     |-------------|---------------------------------|
     | Clique | <span className="button-purple">+ Add Activity</span>  |

2. **Escolher Tipo de Atividade**

   - Escolha:

     | Escolha | 
     |-------------|---------------------------------|
     | <span className="large-number">➊</span> | Common Activities |
     | <span className="large-number">➋</span> | Instructions |

3. **Configurar Propriedades da Atividade**

   - Na 'Edit activity properties' à direita:

     |   | 
     |-------------|---------------------------------|
     | <span className="large-number">➊</span> Label | Check for approval and IT Task |
     | <span className="large-number">➋</span> Description | Ensure approval was done and the IT Task was assigned to the right group |
     | <span className="large-number">➌</span> Start rule | When stage starts |
     | <span className="large-number">➍</span> Clique | <span className="button-purple">Save and Close</span> |

   - Seu formulário deve parecer com isso:
     ![](./Playbook%20Images/Telework%20Case%20Stage%2015.jpg)  

   - Agora, você está pronto com a versão um do seu Playbook! É hora de clicar em <span className="button-purple">Activate</span>
     ![](./Playbook%20Images/Telework%20Case%20Stage%2016.jpg)  

   - O que mais você adicionaria ao processo?

   - Você notou uma atividade para aprovação do gerente? Algumas ótimas atividades já estão lá, prontas para uso!

## Adicionando o Playbook ao Seu Espaço de Trabalho

Agora que publicamos o playbook, precisamos adicionar o playbook ao nosso espaço de trabalho no App Engine Studio.

1. **Abrir o App Engine Studio**

   - Abra 'App Engine Studio'.
   - Abra seu aplicativo 'Telework Case Management'.  
     ![](./Playbook%20Images/App%20Engine%20Studio%20Telework%20Case.jpg)

2. **Editar o Espaço de Trabalho Telework**

   - Edite o espaço de trabalho 'Telework'.
     ![](./Playbook%20Images/Telework%20Case%20Stage%2017.jpg)  
   - (Se 'Get Started' aparecer, clique em 'Get Started'.)

   - Você deve agora estar no construtor de espaço de trabalho, e sua tela deve parecer com isso (alguns dos relatórios podem diferir):
     ![](./Playbook%20Images/workspace%20builder.jpg)

3. **Configurar Páginas de Registro**

   - No topo da página:
     
     |  |
     |-------------|---------------------------------|
     | Clique | 'Record pages' |
     | Escolha | 'Telework Case Record Page' |

       ![](./Playbook%20Images/switch%20to%20record%20view%20on%20workspace.jpg)

4. **Adicionar o Playbook**

   - No lado esquerdo, escolha 'Record details' na barra de navegação esquerda.
     ![](./Playbook%20Images/choose%20record%20details.jpg)

   - No lado direito, está o painel de configuração de detalhes do registro:

     |  | 
     |-------------|---------------------------------|
     | Clique em | `+ Add playbook` |
       ![](./Playbook%20Images/add%20a%20playbook.jpg)

   - Preencha os campos:

     |  | 
     |-------------|---------------------------------|
     | <span className="large-number">➊</span> Tab name | Telework Playbook |
     | <span className="large-number">➋</span> Playbook experience | Global Playbook Experience |
     | <span className="large-number">➌</span> Clique | <span className="button-purple">Add</span> |
       ![](./Playbook%20Images/Add%20a%20playbook%20fields.jpg)

## O Que É uma Experiência de Playbook?

Após criar seu processo no designer de automação de processos, você pode usar a experiência "Global Playbook Experience", que é ótima se você usou todas as atividades padrão e gosta da aparência no espaço de trabalho.

Alternativamente, você pode criar suas próprias experiências e componentes para oferecer ainda mais flexibilidade para o usuário. Você também pode usar o UI Builder para criar novos componentes e personalizar ainda mais a experiência para as necessidades dos seus trabalhadores.

Para mais informações sobre como usar experiências de playbook, aqui estão alguns recursos:

- [Playbook Experiences – docs page](https://docs.servicenow.com/en-US/bundle/vancouver-platform-user-interface/page/administer/workspace/concept/set-up-playbook.html)
- [Platform Academy Session #21 Video](https://www.youtube.com/watch?v=mQKrlf3iyNg)

## Personalizar a Posição da Aba

Agora que você adicionou o playbook ao espaço de trabalho, observe como ele está aparecendo como uma aba na página de registro no final. Vamos movê-lo para o início.

- Clique no link no canto superior direito 'open in UI Builder' (e se aparecer um pop-up, continue para o UI Builder):
  ![](./Playbook%20Images/Telework%20playbook%20move%20to%20first.jpg)

- No UI Builder – pode levar um minuto para carregar. Em breve, você verá as páginas e seções à esquerda.

1. **Mover a Aba**

   - À esquerda vá para: (esses itens já devem estar expandidos)

     >Corpo  
     >>- Painéis redimensionáveis
     >>>- Esquerda
       >>>>- Clique em "Main Tab"
         ![](./Playbook%20Images/Step%201%20UIB.jpg)

   - No painel direito do UI Builder, arraste a aba Telework Playbook para que fique após a aba Details.
     ![](./Playbook%20Images/UIB%202.jpg)  

   - Deve parecer com isso. Então clique em <span className="button-purple">Save</span>:
     ![](../images/2024-12-04-00-19-50.png)

   ### Você Concluiu!

   Quando o botão 'Save' no canto superior direito estiver desativado, você pode fechar essa aba e agora vamos testar no seu espaço de trabalho.

## Testando o Playbook

1. **Criar um Novo Caso de Teletrabalho**

   - Volte para a visualização da plataforma e, em espaços de trabalho, encontre 'Telework Case Management':
    ![](../images/2024-12-04-00-17-12.png)

   - O playbook é executado quando um novo caso de Teletrabalho é criado, então precisamos fazer isso para ver o playbook em ação.

   - Quando o espaço de trabalho abrir:

     |  | 
     |-------------|---------------------------------|
     | <span className="large-number">➊</span> | Escolha 'List' Menu no canto esquerdo |
     | <span className="large-number">➋</span> | Escolha 'New' |
       ![](./Playbook%20Images/Open%20new%20case%20step%201%20and%202.jpg)

   - Preencha os campos:

     |  | 
     |-------------|---------------------------------|
     | Arrangement | Remote telework |
     | Justification | Dependent Care |
     | Clique | <span className="button-purple">Save</span> |

   - Se não aparecer imediatamente, atualize o navegador – isso pode acontecer na primeira vez que você executar.

   - Aqui está seu playbook:

     - Passe por ele e verifique a experiência.
     - O que você faria diferente?
     - O que mais seria útil?

   - Parabéns!
    ![](../images/2024-12-04-00-22-34.png)
