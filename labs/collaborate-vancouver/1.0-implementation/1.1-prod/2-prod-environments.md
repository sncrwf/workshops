---
id: environments
title: 2. Ambientes
hide_table_of_contents: true
draft: false
---

# Exercício: Criar Ambientes

##### Tempo Estimado para Conclusão: 10 minutos

## Visão Geral

[Ambientes ↗](https://docs.servicenow.com/csh?topicname=config-pipeline-environments.html&version=latest) contêm informações sobre uma instância do ServiceNow e como acessá-la.

A seguir, você criará um registro de Ambiente para "Produção" e "Desenvolvimento" na instância Controller onde o AEMC está instalado.


### Antes do Exercício
``` mermaid
graph LR
    Production[Production Instance]
    style Production fill:#CCFFCC,stroke:#B0BAD3,stroke-width:2px,color:#333;
```

### Depois do Exercício
``` mermaid
graph TD
    subgraph Prod1["Production Instance"]
        Dev("#quot; Dev #quot;
        Environment record
        ‎")
        Prod("#quot; Prod #quot;
        Environment record
        (The Controller)")
    end
    class Prod1 prodStyle
    class Dev,Prod envStyle
    classDef prodStyle fill:#CCFFCC,stroke:#B0BAD3,stroke-width:2px,color:#333;
    classDef envStyle fill:#F3F3F3,stroke:#B0BAD3,stroke-width:2px,color:#333;
```

## Instruções

1. Faça login em **Prod**.

2. Clique em **Todos** >> digite **environment** >> clique em **Environments**  
    ![relative](/img/lab-aemc/2023-06-30-15-17-33.png)

3. Clique em **New** no canto superior direito.  
    ![relative](/img/lab-aemc/2023-06-30-15-19-10.png)

4. Preencha o formulário conforme abaixo.

    |Field | Value 
    |---|---
    |**Name** | Dev
    |**Instance Type** | Development 
    |**Dev Instance URL** | ![](/img/lab-aemc/2023-08-10-12-53-04.png)
    |**Instance credential** | Pipeline_Credentials 
    |**Is Controller?** | **NÃO**
    |**Instance Id** | Será automáticamente populado ao clicar em **"Validate"**

5. Clique em **Validate**  
    ![relative](/img/lab-aemc/2023-07-11-15-38-49.png)

    ![relative](/img/lab-aemc/2023-07-11-15-14-18.png)

6. Clique em **Submit** para finalizar a criação do registro de ambiente.  
    ![relative](/img/lab-aemc/2023-07-11-15-37-58.png)

7. Clique em **New** no canto superior direito.  
    ![relative](/img/lab-aemc/2023-06-30-15-19-10.png)

8. Preencha o formulário conforme abaixo.

    |Field | Value 
    |---|---
    |**Name** | Prod 
    |**Instance Type** | Production 
    |**Prod Instance URL** | ![](/img/lab-aemc/2023-08-10-13-17-01.png)
    |**Instance credential** | Pipeline_Credentials 
    |**Is Controller?** | **SIM**
    |**Instance Id** | Será automáticamente populado ao clicar em **"Validate"**


9. Clique no botão "Validate".  
    ![relative](/img/lab-aemc/2023-07-11-15-38-49.png)

    ![relative](/img/lab-aemc/2023-07-11-15-14-18.png)

10. Clique em **Submit** para finalizar a criação do registro de ambiente.  
    ![relative](/img/lab-aemc/2023-07-11-15-37-58.png)

## Lições Aprendidas

Neste exercício, você:

- Compreendeu a função e a importância dos registros de Ambiente na plataforma ServiceNow.

- Adquiriu conhecimento sobre como validar esses registros de Ambiente.

- Configurou com sucesso os registros de Ambiente para as instâncias de Desenvolvimento e Produção em seu ambiente Prod.