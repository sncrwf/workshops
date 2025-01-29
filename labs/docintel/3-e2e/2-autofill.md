---
id: 2-autofill
title: 3.2 Aumente a produtividade do agente com Autofill
hide_table_of_contents: true
draft: false
---

1. Em **Document Intelligence Admin**, navegue para a aba **Settings**.
![](../images/2025-01-29-14-40-31.png)

2. Altere o **Extraction Mode** para **Auto-fill mode**, adicione o valor para **Auto-fill Threshold = 60%** e **Warning Threshold = 60%**.
![](../images/2025-01-29-14-44-57.png)

3. Habilite o **Fully Automated mode** e adicione o valor de **Fully-automated threshold = 80%**
![](../images/2025-01-29-14-46-53.png)

   - Clique em **Save**

4. Atenda à solicitação:
   - Navegue para **Invoice Lab > Submit an invoice** para acessar o Record Producer.
   - Anexe um arquivo e envie. 
   - Após ser redirecionado para o registro, observe que os campos da fatura estão vazios e não há itens de linha de fatura.
   - Navegue para **Document Intelligence > Document Tasks** e abra o registro com **Source Record** = `INVTASK0001003`.
   - Selecione **Show In DocIntel**.
   - Observe que alguns campos são preenchidos automaticamente. Preencha os valores dos outros campos. Envie. Feche a aba do navegador.


:::info
Lembre-se, o Document Intelligence utiliza aprendizado de máquina (ML) para extrair informações de documentos de forma manual, autônoma ou semiautônoma, com base no nível de confiança atribuído a cada campo. Quanto mais extrações supervisionadas forem realizadas, mais preciso será o modelo e maior será seu grau de autonomia.

Se os resultados não estiverem conforme o esperado, verifique se os limiares (thresholds) e a taxa de confiança estão ajustados corretamente. Se necessário, reforce o treinamento do modelo submetendo mais documentos.
:::

**📌 Importante: Documentos com layouts muito diferentes podem impactar negativamente a taxa de confiança do modelo.**

## Verificação do Lab

Os valores foram preenchidos automaticamente com base nos limites selecionados.

À medida que mais documentos são processados, o modelo de IA aprende, o que resulta em mais valores preenchidos automaticamente. Quando o modelo puder preencher automaticamente todos os campos de um documento, você pode considerar o **Straight Through Processing**.

## Conclusão

🎉 **Parabéns! Você concluiu este laboratório.** 🎉

Caso deseje contiuar, conclua a atividade adicional na próxima página.