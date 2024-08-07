---
title: "Criar Tabela de Decisão"
sidebar_label: "2. Criar Tabela de Decisão"
hide_table_of_contents: false
---
# Criar Tabela de Decisão para Condições de Aprovação Automática

Uma Tabela de Decisão permite que os usuários definam regras de negócios complexas e lógica de decisão usando um formato tabular. As tabelas de decisão são particularmente úteis para automatizar processos de tomada de decisão dentro de fluxos de trabalho, aprovações ou outros processos de negócios.

[Clique aqui para saber mais sobre Tabelas de Decisão.](https://docs.servicenow.com/bundle/vancouver-application-development/page/administer/decision-table/concept/decision-designer-overview.html)

Vamos criar uma tabela de decisão para avaliar o tipo de arranjo e o número de dias e retornar um resultado de aprovação automática que podemos acessar no nosso fluxo principal.

## Voltar ao App Engine Studio para Construir a Tabela de Decisão

1. Vá para a aba com o App Engine Studio.  
![](./images/04-02-01-returntoaes.png)

2. Clique em "Logic and Automation (1)".  
![](./images/04-02-02-logicandautomation.png)

3. Clique no botão <span className="button-white-purple-border">+Add</span>.  
![](./images/04-02-03-addlogicandautomation.png)

4. Selecione o tile Decision.  
![](./images/04-02-04-selectdecision.png)

5. Clique no botão <span className="button-purple">Begin</span>.  
![](./images/04-02-05-beginlogicandautomation.png)

6. Configure sua tabela de decisão.

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Name | Telework Auto Approval
   |<span className="large-number">➋</span>|Accessible from | This application scope only
   |<span className="large-number">➌</span>|Clique no botão <span className="button-purple">Continue</span>.  
![](./images/04-02-06-setupdecisiontable.png)

7. Clique no botão <span className="button-white-grey-border">Edit Decision Table</span>.  
![](./images/04-02-07-editdecisiontable.png)

8. Clique no botão <span className="text-purple-bold">⨁ Add</span> ao lado de Inputs.  
![](./images/04-02-08-addinputs.png)

9. Preencha o seguinte:

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Label | Telework Case
   |<span className="large-number">➋</span>|Type | Reference
   |<span className="large-number">➌</span>|Table | Telework Case  
![](./images/04-02-09-populateinputs.png)

10. Na linha de Input que você acabou de criar, clique em <span className="button-white-purple-border">Add condition column</span>.  
![](./images/04-02-12-addconditioncolumn.png)

11. Preencha o formulário NEW CONDITION COLUMN.

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Condition Column Label | Arrangement
   |<span className="large-number">➋</span>|Description | Type of Arrangement
   |<span className="large-number">❸</span>|Data to Evaluate | Field
   |<span className="large-number">❹</span>|Field | Telework Case.arrangement
   |<span className="large-number">❺</span>|Default operator | is
   |<span className="large-number">❻</span>|Clique no botão <span className="button-purple">Done</span>.  
![](./images/04-02-13-newconditioncolumnform.png)

12. Adicione outra coluna de condição.

   >1. Clique no botão de mais ⨁ ao lado da condição que acabamos de criar.

   >2. Selecione "Add condition column".  
![](./images/04-02-14-addconditioncolumn.png)

13. Preencha o formulário NEW CONDITION COLUMN.

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Condition Column Label | Days per Week
   |<span className="large-number">➋</span>|Description | Days per Week
   |<span className="large-number">❸</span>|Input | Telework Request
   |<span className="large-number">❹</span>|Data to Evaluate | Field
   |<span className="large-number">❺</span>|Field | Telework Case.days_per_week
   |<span className="large-number">❻</span>|Default operator | less than or is
   |<span className="large-number">❼</span>|Clique no botão <span className="button-purple">Done</span>.  
![](./images/04-02-15-newconditioncolumnform.png)

14. Na coluna de resultados, clique em <span className="text-black-bold-lgrey">⨁ Add result column</span>.  
![](./images/04-02-16-addresultcolumn.png)

15. Preencha o formulário NEW RESULT COLUMN.

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Result Column Label | Auto Approved
   |<span className="large-number">➋</span>|Description | Is telework auto approved
   |<span className="large-number">❸</span>|Result Type | True/False
   |<span className="large-number">❹</span>|Clique no botão <span className="button-purple">Done</span>.  
![](./images/04-02-17-newresultcolumnform.png)

16. Vamos definir nossa primeira linha de decisão clicando na linha 1.  
![](./images/04-02-18-definedecisionrow.png)

17. Preencha a Condição de Arranjo.

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Operator | is
   |<span className="large-number">➋</span>|Value | Situational Telework  
![](./images/04-02-19-populatearrangementcondition.png)

18. Preencha a Condição de Número de Dias.

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Operator | less than or is
   |<span className="large-number">➋</span>|Value | 3
   |<span className="large-number">❸</span>|Click on the value in the Auto Approved column (currently false). 
![](./images/04-02-20-populatnumdayscondition.png)

19. Altere o resultado para Aprovação Automática para verdadeiro.

   >1. Altere o resultado para true.

   >2. Clique no botão <span className="button-white-purple-border">OK</span> para continuar.  
![](./images/04-02-21-populateresult.png)

20. Vamos adicionar nossa próxima linha de decisão clicando em <span className="text-purple-bold">⨁ Add new decision row</span>  
![](./images/04-02-22-addnewdecisionrow.png)

21. Preencha a Condição de Arranjo.

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Operador | is
   |<span className="large-number">➋</span>|Valor | Situational Telework  
![](./images/04-02-23-populatearrangementcondition.png)

22. Preencha a Condição de Número de Dias.

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Operator | greater than
   |<span className="large-number">➋</span>|Value | 3
![](./images/04-02-24-populatenumdayscondition.png)

23. Vamos adicionar outra linha de decisão clicando em <span className="text-purple-bold">⨁ Add new decision row</span>  
![](./images/04-02-25-addnewdecisionrow.png)

24. Preencha a Condição de Arranjo.

   | |Nome do Campo              | Valor do Campo
   |-|---------------------------| --------------
   |<span className="large-number">➊</span>|Operator | is not
   |<span className="large-number">➋</span>|Value | Situational Telework  
![](./images/04-02-26-populatearrangementcondition.png)

25. Vamos salvar nosso trabalho clicando no botão <span className="button-purple">Save</span>.  
![](./images/04-02-27-savedecision.png)

## Bônus

Teste diferentes cenários antes de modificar o Fluxo Principal.
