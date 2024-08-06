---
title: "Modificar Fluxo de Aprovação de Caso de Teletrabalho"
sidebar_label: "3. Modificar Fluxo de Aprovação de Caso de Teletrabalho"
hide_table_of_contents: false
---
# Modificar o Fluxo de Aprovação de Caso de Teletrabalho

Agora que criamos o People Finder Spoke e nossa Tabela de Decisão de Aprovação Automática, vamos modificar o Fluxo de Aprovação de Caso de Teletrabalho para permitir a aprovação automática para aqueles que foram pré-certificados ou solicitaram 3 dias ou menos para Teletrabalho Situacional.

## Abrir o Fluxo de Aprovação de Caso de Teletrabalho e adicionar nossas mudanças

1. Volte para a aba Home do App no App Engine Studio.  
![](./images/04-03-01-AppHome.png)

2. Abra o fluxo de Aprovação de Caso de Teletrabalho clicando na linha em Logic and Automation.  
![](./images/04-03-02-selectmainflow.png)

3. Altere a visualização do Flow Designer para Tree View.  
![](./images/04-03-03-toggleview.png)

4. Primeiro, queremos adicionar uma Variável de Fluxo para armazenar o status de aprovação automática.

   >1. Clique no botão <span className="button-white-purple-border">...</span> ao lado do botão Save no canto superior esquerdo da sua tela.

   >2. Selecione "Flow Variables" no menu suspenso.  
![](./images/04-03-04-flowvariables.png)

5. Clique no sinal de mais ⨁ para adicionar uma variável.  
![](./images/04-03-05-addflowvariable.png)

6. Configure a variável de fluxo.

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Rótulo | Approved
   |<span className="large-number">➋</span>|Nome | approved
   |<span className="large-number">❸</span>|Tipo | True/False
   |<span className="large-number">❹</span>|Clique no botão 🆇 para fechar.  
![](./images/04-03-06-populateflowvariable.png)

7. Antes do nosso primeiro passo, queremos chamar o People Finder Spoke. Passe o mouse acima do passo "Ask for Approval" e clique no sinal de mais ⨁.  
![](./images/04-03-07-addspoke.png)

8. Adicione o People Finder Spoke

   >1. Selecione "Action" como o tipo de passo.

   >2. Procure por "people finder".

   >3. Selecione a ação "GET /user".  
![](./images/04-03-08-addspokeaction.png)

9. Clique no seletor de dados para e-mail.  
![](./images/04-03-09-dotwalkspoke.png)

10. Navegue até o endereço de e-mail da pessoa que abriu a solicitação.

   >1. Clique em "Trigger - Record Created"

   >2. Clique na seta azul ao lado do registro "Telework Case" para detalhar.

   >3. Clique na seta azul ao lado de "Opened by".

   >4. Clique em "Email" para definir o valor.  
![](./images/04-03-10-dotwalkspoke.png)

11. Clique no botão <span className="button-purple">Done</span>.  
![](./images/04-03-11-donespoke.png)

12. Em seguida, queremos usar a tabela de decisão que construímos. Passe o mouse entre os passos 2 e 3 e clique no sinal de mais ⨁.  
![](./images/04-03-12-adddecision.png)

13. Adicione a Tabela de Decisão de Aprovação Automática de Teletrabalho.

   >1. Selecione "Flow Logic" como o tipo de passo.

   >2. Selecione "Make a decision" na lista.  
![](./images/04-03-13-adddecision.png)

14. Configure o passo de decisão.

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Rótulo da Decisão | Check auto approve conditions
   |<span className="large-number">➋</span>|Tabela de Decisão | Telework Auto Approval
   |<span className="large-number">❸</span>|Execução | Primeira decisão que corresponder
   |<span className="large-number">❹</span>|Usar Branches | Desmarcar
   |<span className="large-number">❺</span>|Solicitação de Teletrabalho | Arraste e solte o dado <span className="button-white-purple-border-black">Telework Case Record</span>   
   |<span className="large-number">❻</span>|Clique no botão <span className="button-purple">Done</span>.  
![](./images/04-03-14-setdecision.png)

15. Agora, precisamos verificar se qualquer condição de aprovação automática foi atendida. Passe o mouse entre os passos 3 e 4 e clique no sinal de mais ⨁.  
![](./images/04-03-17-checkautoapprovemet.png)

16. Adicione a condição if.

   >1. Selecione "Flow Logic" como o tipo de passo.

   >2. Selecione "If" na lista.  
![](./images/04-03-18-addifstep.png)

17. Configure a condição if.

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Rótulo da Condição | If auto approve conditions are met
   |<span className="large-number">➋</span>|Condição 1 | Navegar (ver passo 18 abaixo)
   |<span className="large-number">❸</span>|Operador | is
   |<span className="large-number">❹</span>|Valor | Y
   |<span className="large-number">❺</span>|Clique no botão <span className="button-white-maroon-border">or</span>.
   |<span className="large-number">❻</span>|Condição 2 | Navegar (ver passo 19 abaixo)
   |<span className="large-number">❼</span>|Operador | is
   |<span className="large-number">❽</span>|Valor | True
   |<span className="large-number">❾</span>|Clique no botão <span className="button-purple">Done</span>.  
![](./images/04-03-19-setupifcond.png)

18. Navegar na Condição 1 (passo 2 acima)

   >1. Clique em "2 - GET /User"

   >2. Clique na seta azul ao lado do objeto "output" para detalhar.

   >3. Clique em "telework-certified" para definir o valor.  
![](./images/04-03-20-dotwalkpeoplefinder.png)

19. Navegar na Condição 2 (passo 2 acima)

   >1. Clique em "3 - Make A Decision"

   >2. Clique na seta azul ao lado do registro "Decision Table Multiple Result Record" para detalhar.

   >3. Clique na seta azul ao lado do glide_var "Result elements" para detalhar.

   >4. Clique em "Auto Approved" para definir o valor.  
![](./images/04-03-21-dotwalkautoapprove.png)

20. Vamos definir o valor de Approved para verdadeiro.

   >1. Selecione "Flow Logic" como o tipo de ação.

   >2. Selecione "Set Flow Variables" na lista.  
![](./images/04-03-22-setflowvariables.png)

21. Para adicionar uma variável de fluxo para definir, clique no sinal de mais ⨁.  
![](./images/04-03-23-setflowvariables.png)

22. Defina a variável de fluxo Approved para verdadeiro.

   >1. Selecione "Approved | True/False" no menu suspenso.

   >2. Marque a caixa de dados para true.

   >3. Clique no botão <span className="button-purple">Done</span>.  
![](./images/04-03-24-setflowvariables.png)

23. Agora, vamos adicionar a lógica de fluxo para quando nossa condição não for atendida. Passe o mouse acima do passo 6 e clique no sinal de mais ⨁.  
![](./images/04-03-25-addelse.png)

24. Adicione a condição else.

   >1. Selecione "Flow Logic" como o tipo de passo.

   >2. Selecione "Else" na lista.  
![](./images/04-03-26-addelse.png)

25. Mova a ação de solicitação de aprovação.

   >1. Passe o mouse ao lado do passo 7 até ver uma forma de cruz e o texto "Drag to reorder steps".

   >2. Arraste o passo 7 para o sinal de mais ⨁ abaixo do passo 6.
![](./images/04-03-27-askforapproval.png)

26. Mova a condição if para a aprovação do gerente.

   >1. Passe o mouse ao lado do passo 8 até ver uma forma de cruz e o texto "Drag to reorder steps".

   >2. Arraste o passo 8 para o sinal de mais ⨁ abaixo do passo 7.
![](./images/04-03-30-checkforapproval.png)

27. Agora, defina a variável de fluxo quando o gerente aprovar. Passe o mouse acima do passo 9 e clique no sinal de mais ⨁.  
![](./images/04-03-32-setflowvariables.png)

28. Defina a variável de fluxo de Aprovação para verdadeiro.

   >1. Selecione "Flow Logic" como o tipo de ação.

   >2. Selecione "Set Flow Variables" na lista.  
![](./images/04-03-33-setflowvariables.png)

29. Para adicionar uma variável de fluxo para definir, clique no sinal de mais ⨁.  
![](./images/04-03-29-setflowvariables.png)

30. Defina a variável Approved para verdadeiro.

   >1. Arraste e solte a variável de fluxo <span className="button-white-purple-border-black">Approved</span> dos dados à direita da tela para o campo Nome.

   >2. Marque a caixa de dados para true.

   >3. Clique no botão <span className="button-purple">Done</span>.  
![](./images/04-03-34-setflowvariables.png)

31. Vamos retornar à nossa lógica principal e adicionar um novo passo.  
![](./images/04-03-31-addnewstep.png)

32. Adicione a condição if.

   >1. Selecione "Flow Logic" como o tipo de passo.

   >2. Selecione "If" na lista.  
![](./images/04-03-32-addifstep.png)

33. Configure a condição if.

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Rótulo da Condição | If all approve conditions are met
   |<span className="large-number">➋</span>|Condição 1 | Arraste e solte o dado <span className="button-white-purple-border-black">Approved</span>
   |<span className="large-number">❸</span>|Operador | is
   |<span className="large-number">❹</span>|Valor | True
   |<span className="large-number">❺</span>|Clique no botão <span className="button-purple">Done</span>.  
![](./images/04-03-33-setupifcond.png)

34. Exclua o espaço reservado de passo abaixo do passo 12.  
![](./images/04-03-34-deletestep.png)

35. Mova o passo de Criar Tarefa.

   >1. Passe o mouse ao lado do passo 10 até ver uma forma de cruz e o texto "Drag to reorder steps".

   >2. Arraste o passo 10 para o sinal de mais ⨁ abaixo da condição então no passo 12.  
![](./images/04-03-35-movecreatetask.png)

36. Mova o passo de Enviar E-mail.

   >1. Passe o mouse ao lado do novo passo 10 até ver uma forma de cruz e o texto "Drag to reorder steps".

   >2. Arraste o passo 10 para o sinal de mais ⨁ abaixo do novo passo 12 (Criar Tarefa).  
![](./images/04-03-36-moveemail.png)

39. Salve as alterações no fluxo Principal clicando no botão <span className="button-purple">Save</span>.  
![](./images/04-03-39-saveflow.png)

40. Ative o fluxo Principal clicando no botão <span className="button-white-purple-border-black">Activate</span>.  
![](./images/04-03-40-activateflow.png)

## Bônus

Lembra como testar seu fluxo do laboratório anterior? Teste seu trabalho usando o que você aprendeu!
