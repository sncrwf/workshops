---
id: pipeline
title: 3. Pipeline
hide_table_of_contents: true
draft: false
---

# Exercício: Configurar Pipeline em Prod

##### Tempo Estimado para Conclusão: 15 minutos

## Visão Geral

[Pipelines ↗](https://docs.servicenow.com/csh?topicname=config-pipeline.html&version=latest) estabelecem o caminho que um aplicativo percorre do Desenvolvimento até a Produção.

Isso facilita a capacidade dos administradores de transferir aplicativos de forma eficiente entre diferentes instâncias no App Engine Management Center.

O processo envolve a configuração e ajuste do seu pipeline, especificando os [Ambientes ↗](https://docs.servicenow.com/csh?topicname=config-pipeline-environments.html&version=latest) a serem incluídos e determinando sua posição no pipeline.

O Pipeline é exclusivo para o Ambiente Controller, que neste caso é a instância de Produção.

### Antes do Exercício

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

### Depois do Exercício

``` mermaid
graph LR
    subgraph Prod1["Production Instance"]
        subgraph Pipeline
            Dev("#quot; Dev #quot;
            (Source)")
            Prod("#quot; Prod #quot;
            (Order: 100)")
        end
    end
    Dev --> Prod
    class Prod1 prodStyle
    class Dev,Prod envStyle
    class Pipeline pipeStyle
    classDef prodStyle fill:#CCFFCC,stroke:#B0BAD3,stroke-width:2px,color:#333,lineColor:#007bff;
    classDef envStyle fill:#F3F3F3,stroke:#B0BAD3,stroke-width:2px,color:#333,lineColor:#007bff;
    classDef pipeStyle fill:#FFFFDE,stroke:#B0BAD3,stroke-width:2px,color:#333,lineColor:#007bff;
    linkStyle default stroke: black;
```

### Exemplo de um Pipeline Dev->Test->Prod

:::info  
Neste Laboratório, você apenas configurará Dev e Prod no Pipeline.

Os registros de Pipeline são configurados apenas em Prod.  
:::

``` mermaid
graph LR
    subgraph Prod1["Production Instance"]
        subgraph Pipeline
            Dev("#quot; Dev #quot;
            (Source)")
            Test("#quot; Test #quot;
            (Order: 100)")
            Prod("#quot; Prod #quot;
            (Order: 200)")
        end
    end
    Dev --> Test
    Test --> Prod
    class Prod1 prodStyle
    class Dev,Test,Prod envStyle
    class Pipeline pipeStyle
    classDef prodStyle fill:#CCFFCC,stroke:#B0BAD3,stroke-width:2px,color:#333,lineColor:#007bff;
    classDef envStyle fill:#F3F3F3,stroke:#B0BAD3,stroke-width:2px,color:#333,lineColor:#007bff;
    classDef pipeStyle fill:#FFFFDE,stroke:#B0BAD3,stroke-width:2px,color:#333,lineColor:#007bff;
    linkStyle default stroke: black;
```


## Instruções

:::info  
Complete este exercício no escopo Global.  
:::

1. Clique em **All** >> digite **pipelines** >> clique em **Pipelines**.  
    ![Navigate to Pipelines](/img/lab-aemc/2023-06-30-15-31-49.png)

2. Inicie um novo pipeline: Clique em **New** no canto superior direito.  
    ![Create New Pipeline](/img/lab-aemc/2023-06-30-15-19-10.png)

3. Preencha o formulário conforme abaixo:

    |#|Field | Value                     
    |--|--|--
    |1|**Name** | Main Pipeline
    |2|**Pipeline Type** | Application Deployment
    |3|**Source Environment** | Dev                     
    |4|**Active** | **Checked**

    ![Pipeline Form](/img/lab-aemc/2023-07-31-14-55-26.png)

4. Envie o formulário.  
    ![Submit](/img/lab-aemc/2023-07-11-15-49-01.png)

5. Abra o registro recém-criado **Main Pipeline**.  
    ![Main Pipeline](/img/lab-aemc/2023-07-31-14-57-44.png)

6. Clique em **New** na lista relacionada **Pipeline Environments Order**.  
    ![New Order](/img/lab-aemc/2023-07-31-14-59-00.png)

7. Complete o novo formulário conforme mostrado abaixo e clique em **Submit** quando terminar.

    |#| Field       | Value           
    |-|-|-
    |1| **Pipeline**    | Main Pipeline
    |2| **Environment** | Prod
    |3| **Order**       | 100

    ![Environment Order Form](/img/lab-aemc/2023-07-31-15-02-04.png)

8. Clique em Enviar.

    * Seu registro de Pipeline concluído ficará assim:

    ![relative](/img/lab-aemc/2023-07-31-15-05-01.png) 

:::warning  
Certifique-se de que a configuração do seu Pipeline corresponda à captura de tela acima.

NÃO adicione Dev à lista relacionada **Ordem dos Ambientes do Pipeline**.

Ele é o **Ambiente de Origem** e não deve ser adicionado à lista de ambientes adicionais.  
:::

## Lições Aprendidas

Neste exercício, compreendemos a importância de configurar corretamente o Pipeline na instância de Produção.