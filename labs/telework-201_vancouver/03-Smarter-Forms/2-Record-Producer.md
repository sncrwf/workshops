---
title: "Atualizar o Record Producer"
sidebar_label: "2. Record Producer"
hide_table_of_contents: true
---

# Record Producer

- Verificar o gerente e auto-preencher o campo 'Requested For'

Uma das reclamações que Amanda teve é que às vezes os solicitantes não têm um gerente listado ou, se há um listado, é o gerente errado. Isso resulta em atraso na aprovação e, em última instância, uma experiência ruim para o solicitante.

A solução que decidimos é listar o gerente do solicitante no record producer, para que eles possam deixá-lo ou alterá-lo conforme necessário.

Isso exigirá um novo campo na tabela de teletrabalho, mudanças em algumas perguntas do record producer, um script para auto-preencher o campo 'Requested For' e utilizar a seção 'Auto Populate' no record producer. Parece muito, mas será rápido.

<br/>

Aqui estão nossos passos:

|   | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span>| Criar 2 novos campos na tabela de casos de teletrabalho chamados "Manager" e "Requested For" |
    |<span className="large-number">➋</span>| Criar uma nova pergunta no record producer para "Manager" e "Requested For" |
    |<span className="large-number">➌</span>| Criar um script para auto-preencher o campo 'Requested For' com o nome do usuário logado usando o Design Studio |
    |<span className="large-number">➍</span>| Alterar o fluxo para trabalhar com esses novos campos |
<br/>
<br/>

## Criando 2 Novos Campos na Tabela de Casos de Teletrabalho

1. No **App Engine Studio** na aplicação **Telework Case**:

   |   | 
     |-------------|---------------------------------|
     | Abrir | Tabela de Dados do Caso de Teletrabalho (não mostrado) |
     | Clique | <span className="button-purple">+ Add field</span> |

   ![](./Forms%20Images/Add%20field%20to%20table.jpg)

2. Preencha esses campos:

   |   | 
     |-------------|---------------------------------|
     |<span className="large-number">➊</span> Rótulo da Coluna | Manager |
     |<span className="large-number">➋</span> Tipo | Referência |
     |<span className="large-number">➌</span> Tabela para Referência | Usuário (sys_user) |
     |<span className="large-number">➍</span> Clique | <span className="button-purple">Add</span> |
   ![](./Forms%20Images/Add%20manager%20field%20steps.jpg) 

3. Agora, adicione um novo campo chamado 'Requested For' usando os mesmos passos e esses atributos:

   |   | 
     |-------------|---------------------------------|
     |<span className="large-number">➊</span> Rótulo da Coluna | Requested For |
     |<span className="large-number">➋</span> Tipo | Referência |
     |<span className="large-number">➌</span> Tabela para Referência | Usuário (sys_user) |
     |<span className="large-number">➍</span> Clique | <span className="button-purple">Add</span> |

   ![](./Forms%20Images/Requested%20for%20add%20a%20field.jpg)    

4. Adicione-os ao formulário da área de trabalho

   |   | 
     |-------------|---------------------------------|
     | Clique | 'Forms' (centro no topo, à direita de 'Data') |
     | Altere | 'Default view' para 'Workspace Telework' |

   ![](./Forms%20Images/change%20default%20view%20of%20form.jpg)  

5. Adicione os novos campos ao formulário

   |   | 
     |-------------|---------------------------------|
     |<span className="large-number">➊</span> | Manager |
     |<span className="large-number">➋</span> | Requested For |
     |<span className="large-number">➌</span> | <span className="button-purple">Save</span> |

   ![](./Forms%20Images/add%20requested%20for%20and%20manager%20to%20form.jpg)  
   
Ótimo – agora você tem um novo campo chamado 'Manager' e 'Requested For' e eles estão no seu formulário de área de trabalho.

## Em seguida, adicionaremos 2 novas perguntas ao nosso record producer

Volte para sua página inicial do App para **Telework Case Management** e abra a Experiência, 'Apply for Telework – record producer':

![](./Forms%20Images/choose%20apply%20for%20telework%20record%20producer.jpg)  

Uma vez aberto, escolha:

1. Questions
2. Exclua o Conjunto de Perguntas – 'Standard Employee Questions'
![](./Forms%20Images/Delete%20question%20set.jpg)  
3. Após clicar no 'x', clique em 'Remove'

Em seguida, adicione a pergunta para descobrir para quem eles estão solicitando o arranjo de teletrabalho – isso dará flexibilidade às equipes para que possam solicitar em nome de outra pessoa, o que também foi algo solicitado pelas equipes que fosse adicionado ao formulário.

4. Insira uma nova pergunta

   |   | 
    |-------------|---------------------------------|
    | Click | 'Insert New Question' |
    | Question Type | Choice |
    | Question subtype | Record Reference |
    | Mape to a specific field on the table | True |
    | Table field | Requested for |
    | Question label | Who is this arrangement for? |
    | Name | requested_for |


   ![](./Forms%20Images/Manager%20type.jpg) ![](./Forms%20Images/requested%20for%20details.jpg)  

   |   | 
     |-------------|---------------------------------|
     | Clique na aba | 'Continue to Additional details' |
     | Tabela de Origem | User (sys_user) *sem condições* |
     | Clique | 'Insert question' (no canto inferior direito) |  

   ![](./Forms%20Images/source%20table%20user.jpg)  

   Mova esta pergunta para o topo do formulário, deve ficar assim:

   ![](./Forms%20Images/Requested%20for%20top%20of%20questions.jpg)  


## Em seguida, precisamos confirmar se temos o gerente correto

Adicionaremos a pergunta do gerente a este formulário e a preencheremos com base em quem eles têm na pergunta 'Requested For'.

5. Em seguida, insira uma nova pergunta

    |   | 
    |-------------|---------------------------------|
    | Click | 'Insert New Question' |
    | Question Type | Choice |
    | Question subtype | Record Reference |
    | Mape to a specific field on the table | True |
    | Table field | Manager |
    | Question label | Manager |
    | Name | manager
 
   ![](./Forms%20Images/Manager%20type.jpg)  ![](./Forms%20Images/manager%20details.jpg)  

   |   | 
     |-------------|---------------------------------|
     | Clique na aba | 'Continue to Additional details' |
     | Tabela de Origem | User (sys_user) *sem condições* |
     | Clique na aba | 'Auto-populate' |  
  
   ![](./Forms%20Images/Manager%20table%20and%20auto%20populate.jpg)  

   | Preencha o formulário  | 
     |-------------|---------------------------------|
     | <span className="large-number">➊</span> Select the question this depends on | 'Who is this arrangement for? sys_user |
     | <span className="large-number">➋</span> | Use o botão de seleção de dados à direita |
     | <span className="large-number">➌</span> | Role até 'Manager' |  
 
   ![](./Forms%20Images/manager%20auto-populate.jpg)  

   Clique na aba 'Annotation'
   ![](./Forms%20Images/manager%20click%20on%20annotation.jpg)  

   | Preencha o formulário  | 
     |-------------|---------------------------------|
    | Show instructions | true |
    | Instructions | If this is the correct manager don't change. If it is empty or the wrong manager, please change. The approval for your telework request will go to this person. |
 
 
   ![](./Forms%20Images/manager%20annotation.jpg)  

   |   | 
     |-------------|---------------------------------|
     | Clique no botão | <span className="button-purple">Insert Question</span> |

## Bônus: por conta própria, adicione um comportamento para que a pergunta 'Manager' seja obrigatória se estiver vazia!

6. Mova a pergunta 'Manager' para que seja a segunda pergunta, deve ficar assim agora:

   ![](./Forms%20Images/manager%20added.jpg)  

   |   | 
     |-------------|---------------------------------|
     | Clique | <span className="button-purple">Review and submit</span> |
     | Clique | <span className="button-purple">Submit</span> |
     | Clique | <span className="button-purple">Return to my application</span>| 
 
   E você deve estar aqui:

   ![](./Forms%20Images/After%20record%20producer%20update%20home%20page.jpg)  

## Em seguida, queremos auto-preencher a pergunta 'Requested For' com quem está preenchendo o formulário. Para isso, precisamos ir para o Design Studio, encontrar a variável e adicioná-la à aba padrão com uma linha de código.

Precisamos fazer esta parte no Dev Studio.  
Para acessar o Dev Studio:

1. Clique no ícone de **engrenagem** no canto superior direito ![](./Forms%20Images/click%20on%20cog.jpg)
2. Clique em **'open app in Dev Studio'** ![](./Forms%20Images/open%20app%20in%20dev%20studio.jpg)  

   Você deve estar aqui:

   ![](./Forms%20Images/Studio%201.jpg)

   No painel de navegação à esquerda estão todos os arquivos da aplicação que criamos até agora na nossa aplicação Telework Case.

3. Role para a esquerda para encontrar

   > Service Catalog
   >> Record Producer
   >>> Apply for Telework – clique no record producer 'apply for telework'  
   ![](./Forms%20Images/studio%202.jpg)

   Esta é a visão padrão do seu record producer na plataforma.

4. Role para baixo até as listas relacionadas, 'Variáveis'.  
5. Clique na variável 'who is this arrangement for?'

   ![](./Forms%20Images/studio%203.jpg)  

   |   | 
     |-------------|---------------------------------|
     | <span className="large-number">➊</span> | Role até a aba 'Default Value' |
     | <span className="large-number">➋</span> | Cole: `javascript:gs.getUserID()` |
     | <span className="large-number">➌</span> | Clique em 'Update' (escolha seu botão de preferência) |

   ![](./Forms%20Images/studio%204.jpg)  

   Após atualizar, permaneça nesta aba.

## Terminamos com o Design Studio, você pode fechar esta aba do navegador e voltar para a sua página inicial do Telework App.

   ![](./Forms%20Images/After%20record%20producer%20update%20home%20page.jpg)

Neste ponto:

<span className="large-number">➊</span> atualizamos a tabela de dados com 2 novos campos: 'Manager' e 'Requested For'  
<br/>
<span className="large-number">➋</span> modificamos a experiência do record producer  
<br/>  
<span className="large-number">➌</span> criamos um script para auto-preencher o campo 'Requested For' com o nome do usuário logado usando o Design Studio

Agora só resta atualizar o fluxo para aproveitar nossos novos campos.
<br/>  
Lembre-se, estamos agora contando com o campo 'Requested For', não o 'Opened By', pois às vezes eles podem ser diferentes.

## Alterando o fluxo para trabalhar com esses novos campos

(não mostrado)
- Clique em 'Logic and automation'
- Abra o fluxo 'Main' (mude para a visualização de árvore) para que você esteja aqui agora:  
   ![](./Forms%20Images/mainflow_new.jpg)  

2 coisas que precisamos alterar:

>1. Ask For Approval – altere para o campo 'manager'
>2. Send Email – envie o e-mail para o e-mail do 'requested for'
<br/> 

1. Alterando Aprovação

   | Passos | 
     |-------------|---------------------------------|
     |<span className="large-number">➊</span>| Expanda o Passo 6 - 'Ask for Approval' |
     |<span className="large-number">➋</span>| Limpe a caixa após 'Anyone Approves'  |
     |<span className="large-number">➌</span>| Clique no seletor de dados para encontrar o campo 'Manager' |
     |<span className="large-number">➍</span>| trigger - Record Created - Telework Case Record - Manager |

   ![](./Forms%20Images/mainflow202_new.jpg)  

   Clique em <span className="button-purple">Done</span> 

   ![](./Forms%20Images/mainflow203_new.jpg)  

<br/>  

2. Enviar E-mail – envie o e-mail para o e-mail do 'requested for'

   | Passos | 
     |-------------|---------------------------------|
     |<span className="large-number">➊</span>| Expanda o Passo 11 - 'Send Email' |
     |<span className="large-number">➋</span>| Limpe o campo 'To'  |
     |<span className="large-number">➌</span>| Clique no seletor de dados para o campo 'To' |
     |<span className="large-number">➍</span>| trigger - Record Created - Telework Case Record - Requested For - Email |  
  
   ![](./Forms%20Images/mainflow204_new.jpg)  

   Clique em <span className="button-purple">Done</span>  

   ![](./Forms%20Images/Main%20flow%205.jpg)  

### Há outros campos que você precisa alterar? Às vezes, as pessoas usam o nome de opened_by no corpo do e-mail. Se você fez isso, certifique-se de alterar também.

Quase pronto, só falta fazer mais uma coisa:

> Ativar (isso também salva)  
   ![](./Forms%20Images/Activate%20main%20flow.jpg)
   ![](./Forms%20Images/Activate%20again.jpg)  
   >(na verdade são 2 coisas)

## Agora, você pode testar e garantir que tudo está funcionando –

1. Abra o Service Portal  
2. Preencha o formulário Apply for Telework  
3. Se você alterar o campo 'Requested For', o gerente muda? Tente inserir o David Loo
   - David Loo reporta para Bud Richman, ele foi carregado automáticamente?
   - Se o gerente estiver em branco, significa que a pessoa não tem um gerente listado
4. O restante do formulário funciona corretamente?
   - Envie
5. Vá para o workspace de Telework  
6. Verifique o novo formulário de teletrabalho  
   - O campo do gerente está correto?
   - O campo 'requested for' está correto?
   - Após a aprovação, o e-mail vai para a pessoa certa?

# É isso!!

## Se precisar alterar como as variáveis respondem, use o Dev Studio. Sempre há um lugar para scripting – seja uma linha de código simples ou algo mais complexo que use um script include, tudo está lá. (Esse também é um lugar onde o GenAI pode ajudar a acelerar as coisas!)
