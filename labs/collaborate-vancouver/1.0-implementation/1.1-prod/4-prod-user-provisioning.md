---
id: user-provisioning
title: 4. Provisionamento de Usuários
hide_table_of_contents: true
draft: false
---

# Exercício: Provisionamento de Usuários

##### Tempo Estimado para Conclusão: 5 minutos

:::info  
**ESTA SEÇÃO É OPCIONAL E PODE SER PULAR SE VOCÊ ESTIVER ATRASADO.**

Pular as etapas abaixo não impedirá você de concluir o laboratório.  
:::

## Visão Geral

A propriedade do sistema **sn_app_intake.instance_can_provision_user** determina se a instância atual pode suportar o provisionamento automatizado de usuários no ambiente de Desenvolvimento.

Se você preferir adicionar usuários manualmente aos grupos em Dev, você deve definir essa propriedade como **false**.

## Instruções

1. Clique em **All** >> digite ```sys_properties.list``` >> pressione ENTER. 

    ```
    sys_properties.list
    ```

    ![relative](/img/lab-aemc/2023-07-31-15-07-31.png)

2. Clique na lupa à esquerda da coluna **Name**.  
    ![relative](/img/lab-aemc/2023-07-31-15-15-54.png)

3. Digite o nome da propriedade do sistema no campo abaixo da coluna **Name** e pressione ENTER.

    ```
    sn_app_intake.instance_can_provision_users
    ```
    ![relative](/img/lab-aemc/2023-07-31-15-17-13.png)

4. Clique no nome da propriedade do sistema para abri-la. Ela deve estar definida como **true** para você.  
    ![relative](/img/lab-aemc/2023-07-31-15-18-29.png)

5. Clique na palavra **here** para alternar do escopo Global para o escopo da aplicação **Application Intake**.  
    ![relative](/img/lab-aemc/2023-07-31-15-31-23.png)

6. Altere o campo **Value** de 'false' para 'true'.

    :::caution  
    **LEMBRE-SE:** Este valor já foi definido como 'true' para você como parte da configuração automatizada do laboratório.  
    :::

    ![relative](/img/lab-aemc/2023-07-31-15-32-18.png)

7. Clique no botão **Update** para salvar suas alterações.  
    ![relative](/img/lab-aemc/2023-07-31-15-36-39.png)

## Lições Aprendidas

Este exercício destacou a importância de entender e manipular propriedades do sistema dentro do ServiceNow.

1. **Propriedades do Sistema:** A tarefa ilustrou o papel da propriedade do sistema **sn_app_intake.instance_can_provision_user** na gestão do provisionamento automatizado de usuários.

2. **Provisionamento de Usuários:** Compreendemos como habilitar ou desabilitar o provisionamento automatizado de usuários poderia impactar o processo de adição de usuários a grupos no ambiente de Desenvolvimento. Dependendo das necessidades e preferências únicas de uma organização, a opção de adicionar usuários manualmente pode ser escolhida em vez da automação.
