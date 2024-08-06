---
title: "Adicionar um playbook"
sidebar_label: "1. Adicionar um playbook"
hide_table_of_contents: false
---
# Adicionando um Playbook ao Espaço de Trabalho

A equipe da Amanda está crescendo e o espaço de trabalho que ela usa para gerenciar e relatar casos de teletrabalho agora é utilizado por mais de seus subordinados diretos. Ela notou que alguns desses subordinados nem sempre sabem o que validar nas solicitações e Amanda gostaria de ter uma forma de guiar quem visualiza os Casos de Teletrabalho sobre o que procurar, garantir que o processo seja seguido e que todos os casos sejam tratados igualmente.

A solução para isso é implementar um playbook no espaço de trabalho.

Os Playbooks permitem que os usuários do espaço de trabalho interajam com um fluxo de trabalho empresarial em tempo real, diretamente no Workspace. Os agentes podem usar o Playbook para atualizar registros, fazer upload de anexos e concluir tarefas em várias atividades do fluxo de trabalho.
[Clique aqui para mais informações](https://docs.servicenow.com/en-US/bundle/vancouver-build-workflows/page/administer/workspace/concept/playbook-ui.html)

Exemplo de um playbook em um espaço de trabalho:
![](./Playbook%20Images/example%20of%20a%20playbook%20in%20a%20workspace.jpg)

## Etapas para Adicionar um Playbook

|   | 
|-------------|---------------------------------|
|<span className="large-number">➊</span>| Desenhe seu playbook no Process Automation Designer |
|<span className="large-number">➋</span>| Teste e Publique seu playbook |
|<span className="large-number">➌</span>| Adicione o playbook ao seu espaço de trabalho no Workspace Builder |
|<span className="large-number">➍</span>| Se necessário, ajuste a ordem das abas usando o UI Builder |

## Vamos Começar

### 1. Desenhe Seu Playbook no Process Automation Designer

1. Vá para 'All'
2. Digite 'Process Automation Designer'
3. Clique em 'Process Automation Designer' (isso abrirá em uma nova aba do navegador)

   ![](./Playbook%20Images/go%20to%20all%20and%20click%20on%20process%20automation%20designer.jpg)

   Você será direcionado para a visualização de lista do Process Automation Designer, mostrando todos os processos concluídos.

2. Clique em 'Criar um novo processo'

   ![](./Playbook%20Images/PAD%20click%20on%20new%20process.jpg)

3. Dê ao seu processo um rótulo e uma descrição:
   - **Rótulo:** Playbook de Casos de Teletrabalho
   - **Descrição:** Usado para garantir a completude dos casos de teletrabalho, acionado quando um caso é criado
   - Clique em 'Selecionar um Gatilho'

   ![](./Playbook%20Images/name%20your%20process%20and%20select%20trigger.jpg)

   :::info
   Isso será muito parecido com o Flow Designer – nos bastidores, os fluxos são acionados e usados enquanto montamos nosso processo.
   :::

4. Selecione um gatilho:
   - **Escolha:** "Defina suas próprias condições para quando seu processo é executado"
   - **Escolha:** "Criação de Registro"
   - Clique em 'Definir sua condição de gatilho'

   ![](./Playbook%20Images/select%20a%20trigger%201.jpg)![](./Playbook%20Images/select%20a%20trigger%202.jpg)

5. Escolha sua tabela e condições (nenhuma condição específica sobre os tipos de registros é necessária, mas é uma opção):
   - **Tabela:** Caso de Teletrabalho
   - Clique em "Ir para Designer"

   ![](./Playbook%20Images/choose%20conditions%20for%20when%20it%20runs.jpg)

   Mude para a 'Visualização de Quadro'

   ![](./Playbook%20Images/switch%20to%20board%20view.png)

   Você deve ver a seguinte página:

   ![](./Playbook%20Images/Telework%20Case%20STAGE%201.png)

### 2. Adicionar Estágios

1. **Adicionando o Primeiro Estágio:**
   - Clique em <span className="button-purple">+ Adicionar Estágio</span>
   - **Rótulo:** Completude da Solicitação
   - **Descrição:** Garantir que todas as informações estejam fornecidas
   - **Quando iniciar:** Quando o processo começa
   - Clique em 'Salvar e Fechar'

2. **Adicionando o Segundo Estágio:**
   - Clique em <span className="button-purple">+ Adicionar Estágio</span> (ao lado do estágio que você criou)
   - **Rótulo:** Finalizando Solicitação
   - **Descrição:** Garantir que todas as aprovações e tarefas tenham sido criadas e concluídas
   - **Quando iniciar:** Após estágios específicos
   - Clique em 'Salvar e Fechar'

   Sua tela deve se parecer com isso:

   ![](./Playbook%20Images/Telework%20Case%20Stage%202.png)

### 3. Adicionar Atividades

Na Coluna 1, Completude da Solicitação, vamos adicionar as seguintes atividades:

1. **Atividade 1:** Verifique se o `opened_by` tem um gerente, se o campo motivo está preenchido e defina a prioridade.
2. **Atividade 2:** Verifique se o `opened_by` já possui casos de teletrabalho submetidos.
3. **Atividade 3:** Forneça ao usuário do espaço de trabalho o artigo de conhecimento sobre diretrizes de teletrabalho, se ele quiser anexá-lo.

#### Adicionando Atividade 1

1. Clique em <span className="button-purple">+ Adicionar Atividade</span>

   **Faça uma Pausa**: Explore a Tela de Atividade
   - 'Pesquisar Atividades'
   - 'Criar uma nova atividade' – [Saiba mais](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/process-automation-designer/task/create-activity-definition.html)

   As caixas foram destacadas com cores para diferenciá-las. Em sua instância, não haverá cores ao redor de cada seção:
   - **Caixa Vermelha:** Atividades agrupadas
   - **Caixa Roxa:** Atividades dentro de cada atividade agrupada
   - **Caixa Verde:** Informações necessárias para o funcionamento da atividade

   ![](./Playbook%20Images/Add%20activity%20screen.jpg)

   Mais informações: [Clique Aqui](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/process-automation-designer/task/create-process-definition.html)

2. **De volta ao Laboratório e Adicionando a Atividade 1:**
   - **Escolha:** Atividades Comuns
   - **Selecione:** Formulário de Usuário

   ![](./Playbook%20Images/Telework%20Stage%202-5.jpg)

   No lado direito, você encontrará as propriedades da atividade. É aqui que você fornece as informações necessárias para a atividade funcionar.

3. Preencha o formulário (Editar Propriedades da Atividade):
   - **Rótulo:** Revisar Formulário
   - **Descrição:** Verificar se o solicitante tem um gerente, se o campo motivo está preenchido e se a prioridade está definida no nível correto.
   - Clique na aba 'Automação' (NÃO clique em 'Salvar e Fechar')

   ![](./Playbook%20Images/Telework%20Case%20Stage%203.png)


## Adicionando o Primeiro Estágio

| Passos | 
|-------------|---------------------------------|
| Clique | <span className="button-purple">+ Adicionar Estágio</span>  |
| Rótulo | Completude da Solicitação |
| Descrição | Garantir que todas as informações sejam fornecidas |
| Quando iniciar | Quando o processo começa |
| Clique | 'Salvar e Fechar' |

## Adicionando o Segundo Estágio

| Passos | 
|-------------|---------------------------------|
| Clique | <span className="button-purple">+ Adicionar Estágio</span> (ao lado do estágio que você criou)  |
| Rótulo | Finalizando Solicitação |
| Descrição | Garantir que todas as aprovações e tarefas tenham sido criadas e concluídas |
| Quando iniciar | Após estágios específicos |
| Clique | 'Salvar e Fechar' |

Sua tela deve se parecer com isto:

![](./Playbook%20Images/Telework%20Case%20Stage%202.png)

## Na Coluna 1, Completude da Solicitação, vamos adicionar 3 atividades  

| Completude da Solicitação | 
|-------------|---------------------------------|
| Atividade &nbsp;<span className="large-number">➊</span>| Verifique se o `opened_by` tem um gerente, se o campo motivo está preenchido e defina a prioridade |
| Atividade &nbsp;<span className="large-number">➋</span>| Veja se o `opened_by` já possui casos de teletrabalho submetidos |
| Atividade &nbsp;<span className="large-number">➌</span>| Forneça ao usuário do espaço de trabalho o artigo de conhecimento sobre diretrizes de teletrabalho, se quiser anexá-lo |

<br/>
**Completude da Solicitação – Atividade <span className="large-number">➊</span>**
<br/>
<br/>

1.  
    |  | 
    |-------------|---------------------------------|
    | Clique | <span className="button-purple">+ Adicionar Atividade</span>  |

## **Faça uma Pausa**: Explore a Tela de Atividade

- 'Pesquisar Atividades'
- 'Criar uma nova atividade' – para saber mais sobre isso, [vá aqui](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/process-automation-designer/task/create-activity-definition.html)

_(as caixas foram destacadas com cores para diferenciá-las. Em sua instância, não haverá cores ao redor de cada seção)_

- Caixa Vermelha: Essas são suas atividades agrupadas; no Flow Designer, seriam seus 'spokes'
- Caixa Roxa: Em cada Atividade Agrupada, estão as atividades que você pode atribuir ao seu processo. Essas podem incluir atividades interativas e não interativas.
- Caixa Verde: Para cada atividade, esta caixa destaca as informações necessárias para que a atividade funcione.

![](./Playbook%20Images/Add%20activity%20screen.jpg)

Mais informações: [Clique Aqui](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/process-automation-designer/task/create-process-definition.html)

## **De Volta ao Laboratório e Adicionando a Atividade 1**

Nota: Estaremos usando o pacote 'Atividades Comuns'. Sinta-se à vontade para ver o que há em 'Global' e 'Conteúdo de Automação de Processos' para ideias sobre o que mais você pode adicionar a um playbook.

2.  
    | Escolha | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span>| Atividades Comuns |
    | <span className="large-number">➋</span>| Formulário de Usuário |

   Você deve estar aqui:

   ![](./Playbook%20Images/Telework%20Stage%202-5.jpg)  

<br/>
No lado direito, estão as propriedades da atividade. É aqui que você fornece as informações necessárias para a atividade funcionar.
<br/>
<br/>

3. Preencha o formulário (Editar propriedades da atividade):

  | Escolha | 
    |-------------|---------------------------------|
    | Rótulo | Revisar Formulário |
    | Descrição | Verificar se o solicitante tem um gerente, se o campo motivo está preenchido e se a prioridade está definida no nível correto. |
    | Clique | Aba 'Automação' (NÃO clique em 'Salvar e Fechar') |

  ![](./Playbook%20Images/Telework%20Case%20Stage%203.png)  

<br/>
<br/>

4. Esta atividade possui algumas entradas necessárias:

    | Escolha | 
    |-------------|---------------------------------|
    | Tabela | Caso de Teletrabalho |
    | Registro | use o seletor de dados para escolher o registro de gatilho, assim como no Flow Designer |
    | Campos do Formulário | **deve digitar no campo de string:** opened_by,justification,priority |
    | Clique | <span className="button-purple">Salvar e Fechar</span> |

  ![](./Playbook%20Images/Telework%20Case%20Stage%204.jpg)  

Antes de prosseguir, vamos testar isso para você ver como tudo isso parecerá para o usuário do espaço de trabalho.

Clique em 'Testar' no canto superior direito perto de ativar: <span className="button-purple">Testar</span>

1. 
    | TESTE | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Escolha o registro de Caso de Teletrabalho – as imagens abaixo usarão TEL0001002 |
    | <span className="large-number">➋</span> | Clique em <span className="button-purple">Executar Teste</span> |

  ![](./Playbook%20Images/Run%20Test.jpg)

2. Escolha a 'Visualização do Playbook' – clique em: Visualizar (abrirá em uma nova aba do navegador)  
  ![](./Playbook%20Images/Run%20Test%20Choose%20View.jpg)

  Dê um momento para esta tela carregar – quando terminar, deve se parecer com isto:

  ![](./Playbook%20Images/Telework%20Case%20Stage%207.jpg)  

3. Tente adicionar algo para 'Justificativa' e depois 'Atualizar' e 'Marcar como Completo'  

4. No canto inferior direito há um 'engrenagem' – você pode abrir isso e experimentar algumas das configurações extras. Essas podem ser configuradas na aba de experiência para o seu playbook (não faremos isso neste laboratório).

5. Se tudo estiver correto, você pode fechar esta aba do navegador e clicar em <span className="button-purple">Concluído</span> e você deve estar de volta ao designer de playbooks aqui:

  ![](./Playbook%20Images/Telework%20Case%20Stage%206.jpg)


<br/>
**Completude da Solicitação – Atividade <span className="large-number">➋</span>**
<br/>
<br/>

Após o usuário do espaço de trabalho revisar o formulário, gostaríamos que ele visse uma lista de quaisquer casos de teletrabalho que já foram abertos pelo solicitante. Essa será nossa próxima atividade – adicionar uma lista de casos de teletrabalho abertos pelo solicitante.

1.  
    | Abaixo de 'Revisar Formulário'  | 
    |-------------|---------------------------------|
    | Clique | <span className="button-purple">+ Adicionar Atividade</span>  |

2.  
    | Escolha | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Conteúdo de Automação de Processos |
    | <span className="large-number">➋</span> | Mostrar lista de registros |

  ![](./Playbook%20Images/2nd%20Activity%20pick%20activity.jpg)

3. Na 'Editar propriedades da atividade' no lado direito

  |   | 
    |-------------|---------------------------------|
    | Rótulo | Casos de Teletrabalho do Solicitante |
    | Descrição | Se o solicitante enviou outros pedidos de casos de teletrabalho, eles serão listados abaixo |
    | Clique | <span className="button-purple">Layout de UI</span> |

  ![](./Playbook%20Images/Telework%20Case%20Stage%209.jpg)  

4. Preencha a aba 'Layout de UI'

  |   |   
    |-------------|---------------------------------|
    | Título da Lista | Caso do Solicitante |
    | Tabela | Caso de Teletrabalho |
    | Colunas | Número, estado, criado, opened_by |
    | Clique  | 'Adicionar Condição' ao lado de 'Consulta da Lista' |

  Condição: opened_by é opened_by            
  <br/>
  'Adicionar Condição' deve se parecer com isto (então clique em <span className="button-purple">Modificar</span> ):
  
  ![](./Playbook%20Images/2nd%20Activity%20is%20opened%20by.jpg)
  
  **Antes** de clicar em 'Salvar e Fechar', seu formulário deve se parecer com isto:
  
  ![](./Playbook%20Images/Telework%20Case%20Stage%208.jpg)  

5.  
  |  | 
    |-------------|---------------------------------|
    | Clique | <span className="button-purple">Salvar e Fechar</span> |

  ![](./Playbook%20Images/Telework%20Case%20Stage%2010.jpg)  


<br/>
**Completude da Solicitação – Atividade <span className="large-number">➌</span>**
<br/>
<br/>

A última atividade nesta coluna será mostrar ao usuário do espaço de trabalho o artigo de conhecimento sobre diretrizes de teletrabalho – muitos pediram para ter isso à mão caso precisem durante o processo ou para anexar para o solicitante revisar.

1.  
    | Abaixo de 'Casos de Teletrabalho do Solicitante'  | 
    |-------------|---------------------------------|
    | Clique | <span className="button-purple">+ Adicionar Atividade</span>  |

2.  
    | Escolha | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Atividades Comuns |
    | <span className="large-number">➋</span> | Mostrar Artigo de Conhecimento |

  ![](./Playbook%20Images/3rd%20Activity%20Show%20KA.jpg)

3. Na 'Editar propriedades da atividade' no lado direito

  |   | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span>  Rótulo | Mostrar Diretrizes de Teletrabalho KA |
    | <span className="large-number">➋</span>  Descrição | Isso fornecerá ao solicitante o artigo de conhecimento sobre diretrizes de teletrabalho para que eles possam usá-lo se necessário no processo |
    | <span className="large-number">➌</span>  Regra de Início | Quando o estágio começa (queremos que isso esteja disponível imediatamente) |
    | <span className="large-number">➍</span>  Clique | Aba de Automação (ao lado da aba de detalhes) |

  ![](./Playbook%20Images/Telework%20Case%20Stage%2011.jpg)  

4. Preencha a aba 'Automação'

  |   | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> Título | Diretrizes de Teletrabalho |
    | <span className="large-number">➋</span> Artigo de Conhecimento | KB0050185 |
    | <span className="large-number">➌</span> Clique | <span className="button-purple">Salvar e Fechar</span> |

  ![](./Playbook%20Images/Telework%20Case%20Stage%2012.jpg)  


Ótimo – seu processo deve se parecer com isto agora:

![](./Playbook%20Images/Telework%20Case%20Stage%2013.jpg)

##
**Se você tiver um erro relacionado a uma 'conexão de fim' para o passo 2**  
- Vá para 'Visão de Diagrama'  
- Conecte a Atividade 1.2 ao Estágio 2  
- Deve se parecer com isto:  

![](./Playbook%20Images/Telework%20Case%20Stage%2014.jpg)  
- Então volte para a visão de Quadro  

## Sinta-se à vontade para fazer uma pausa e testar seu processo como fizemos anteriormente

<br/>
<br/>

Para a segunda coluna, o estágio 'Finalizando Solicitação', adicionaremos apenas uma atividade.

1. Sob a coluna 'Finalizando Solicitação'  

    |  | 
    |-------------|---------------------------------|
    | Clique | <span className="button-purple">+ Adicionar Atividade</span>  |

2.  
    | Escolha | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Atividades Comuns |
    | <span className="large-number">➋</span> | Instruções |

3. Na 'Editar propriedades da atividade' no lado direito  

    |   | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> Rótulo | Verificar Aprovação e Tarefa de TI |
    | <span className="large-number">➋</span> Descrição | garantir que a aprovação foi feita e que a Tarefa de TI foi atribuída ao grupo certo |
    | <span className="large-number">➌</span> Regra de Início | Quando o estágio começa |
    | <span className="large-number">➍</span> Clique | <span className="button-purple">Salvar e Fechar</span> |

É isso aí! Se você olhar na aba 'Automação', ela automaticamente coloca a descrição como sua instrução. Seu formulário deve se parecer com isto:

![](./Playbook%20Images/Telework%20Case%20Stage%2015.jpg)  

Agora, você está pronto com a versão um do seu Playbook! É hora de clicar em <span className="button-purple">Ativar</span>

![](./Playbook%20Images/Telework%20Case%20Stage%2016.jpg)  

- O que mais você adicionaria ao processo?

- Notou alguma atividade para aprovação de gerente? Algumas ótimas atividades já estão lá, de fábrica!
##

<br/>

Agora que publicamos o playbook, precisamos adicionar o playbook ao nosso espaço de trabalho no app engine studio.
<br/>


1.    
    |  | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Abra 'App Engine Studio' |
    | <span className="large-number">➋</span> | Abra seu aplicativo 'Gerenciamento de Casos de Teletrabalho' |  

  Agora você deve estar aqui:  
  ![](./Playbook%20Images/App%20Engine%20Studio%20Telework%20Case.jpg)

2. Edite o espaço de trabalho 'Telework'

  ![](./Playbook%20Images/Telework%20Case%20Stage%2017.jpg)  

  (se 'Começar' aparecer, clique nele)

Você deve estar no construtor de espaço de trabalho, sua tela deve se parecer com isto (alguns dos relatórios podem ser diferentes)

![](./Playbook%20Images/workspace%20builder.jpg)

2.  No topo da página:  

    |  | 
    |-------------|---------------------------------|
    | Clique | 'Páginas de Registro' |
    | Escolha | 'Página de Registro de Caso de Teletrabalho' |

  ![](./Playbook%20Images/switch%20to%20record%20view%20on%20workspace.jpg)

3.  No lado esquerdo, escolha 'Detalhes do Registro' na barra de navegação esquerda

  ![](./Playbook%20Images/choose%20record%20details.jpg)

4.  No lado direito, está o painel de configuração de Detalhes do Registro   

    |  | 
    |-------------|---------------------------------|
    | Clique em | + Adicionar playbook |

  ![](./Playbook%20Images/add%20a%20playbook.jpg)

5. Preencha os campos:

    |  | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> Nome da Aba | Playbook de Teletrabalho |
    | <span className="large-number">➋</span> Experiência de Playbook | Experiência de Playbook Global |
    | <span className="large-number">➌</span> Clique | <span className="button-purple">Adicionar</span> |

  ![](./Playbook%20Images/Add%20a%20playbook%20fields.jpg)


##
Então, o que é uma experiência de playbook?

Após criar seu processo no designer de automação de processos, você pode usar a experiência padrão "Experiência de Playbook Global", que é ótima se você usou todas as atividades padrão e gosta da aparência delas no espaço de trabalho.

A outra opção é criar suas próprias experiências e componentes, o que pode oferecer ainda mais flexibilidade para o usuário trabalhar. Você pode até usar o UI Builder para criar novos componentes e criar a experiência exata que seus trabalhadores precisam.

Para mais informações sobre o uso de experiências de playbook, há muitos recursos – aqui estão alguns:

- [Experiências de Playbook – página de docs](https://docs.servicenow.com/en-US/bundle/vancouver-platform-user-interface/page/administer/workspace/concept/set-up-playbook.html)
- [Vídeo da Plataforma Academy Sessão #21](https://www.youtube.com/watch?v=mQKrlf3iyNg)
##


Agora que você adicionou o playbook ao espaço de trabalho, observe como ele está aparecendo como uma aba na página de registro, no final, a última aba.   
Vamos movê-lo para o início. Assim está agora – clique no link no canto superior direito 'abrir no UI Builder' (e se houver um pop-up, continue para o UI Builder)

![](./Playbook%20Images/Telework%20playbook%20move%20to%20first.jpg)

Agora que você está no UI Builder – pode levar um minuto para carregar. Em breve, você verá as páginas e seções à esquerda.

1. À esquerda vá para: (esses já devem estar expandidos)  

>Corpo  
>>- Painéis redimensionáveis
  >>>- Esquerda
    >>>>- Clique em "Aba Principal"

  ![](./Playbook%20Images/Step%201%20UIB.jpg)

2. No painel direito do UI Builder  
  Arraste a aba Telework Playbook para que fique acima da aba Detalhes.  

  ![](./Playbook%20Images/UIB%202.jpg)  

  Deve se parecer com isto e então clique em <span className="button-purple">Salvar</span>:

  ![](./Playbook%20Images/UIB%203.jpg)

### Pronto! Quando o botão 'Salvar' no canto superior direito estiver desativado, você pode fechar esta aba e agora testaremos em seu espaço de trabalho.

##

Volte para a visualização da plataforma e, sob espaços de trabalho, encontre 'Telework':

![](./Playbook%20Images/find%20telework%20workspace%20for%20test.jpg)

O playbook é executado quando um novo Caso de Teletrabalho é criado, então precisaremos fazer isso para ver nosso playbook em ação.

1. Quando o espaço de trabalho abrir:

  |  | 
    |-------------|---------------------------------|
    | <span className="large-number">➊</span> | Escolha o Menu 'Lista' no lado esquerdo |
    | <span className="large-number">➋</span> | Escolha 'Novo' | 

  ![](./Playbook%20Images/Open%20new%20case%20step%201%20and%202.jpg)


2. Preencha os campos:

  |  | 
    |-------------|---------------------------------|
    | Arranjo | Remoto |
    | Justificativa | Cuidados Dependentes |
    | Clique | <span className="button-purple">Salvar</span> |

  (se não aparecer imediatamente, atualize o navegador – isso pode acontecer na primeira vez que você executá-lo)

Aqui está o seu playbook 

- Passe por ele e verifique a experiência –  
- O que você faria diferente?  
- O que mais seria útil?  

Parabéns!

![](./Playbook%20Images/Final%20Playbook%20in%20Workspace.jpg)

