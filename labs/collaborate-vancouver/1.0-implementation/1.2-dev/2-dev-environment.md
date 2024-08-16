---
id: environment
title: 2. Ambiente Controller 
hide_table_of_contents: true
draft: false
---

# Exercício: Criar Ambiente Controller 

##### Tempo Estimado de Conclusão: 10 minutos

## Overview

Em seguida, você adicionará um registro de "Controller" Environment à sua instância Dev.

Ele conterá os detalhes para que o Dev acesse o Controller Environment, que é a instância Prod.

A Produção é considerada o "Controller" Environment, pois é onde o App Engine Management Center está instalado e orquestra as atividades.

### Antes do Exercício

``` mermaid
graph LR
    Dev[Development Instance]
    class Dev devStyle
    classDef devStyle fill:#D5F7FF,stroke:#B0BAD3,stroke-width:2px,color:#333;
```


### Depois do Exercício

``` mermaid
graph 
    subgraph Development[Development Instance]
        Prod("#quot; AEMC Controller #quot;
        Environment record
        (Prod)")
    end
    class Development devStyle
    class Prod envStyle
    classDef devStyle fill:#D5F7FF,stroke:#B0BAD3,stroke-width:2px,color:#333;
    classDef envStyle fill:#F3F3F3,stroke:#B0BAD3,stroke-width:2px,color:#333;
```


## Instructions

1. Faça login em **DEV**.


2. Clique em **All** >> digite **environment** >> clique em **Environments** 

![relative](/img/lab-aemc/2023-07-05-09-45-11.png)

3. Clique em **New** no canto superior direito.

![relative](/img/lab-aemc/2023-06-30-15-19-10.png)

4. Complete o formulário usando as informações abaixo. 

|Campo | Valor 
|:---|:---
|**Name** | AEMC Controller 
|**Instance Type**| Production 
|**Prod Instance URL** | ![](/img/lab-aemc/2023-08-10-13-17-01.png)
|**Instance credential** | Pipeline_Credentials 
|**Is Controller?** | **MARQUE A CAIXA**
|**Instance Id** | Isso será preenchido automaticamente após clicar em Validate.

5. Clique em **Validate**.

![relative](/img/lab-aemc/2023-07-11-16-01-35.png)

![relative](/img/lab-aemc/2023-07-05-13-56-23.png)

6. Clique em **Submit** para finalizar a criação do registro de **Prod** environment.

![relative](/img/lab-aemc/2023-07-11-15-59-53.png)

## Lições Aprendidas

 **Importância do Controller Environment**
 
 Configurar o Controller Environment é crucial para a operação do App Engine Management Center. Este exercício enfatiza o papel vital da instância de Produção, pois é onde o AEMC está instalado e de onde ele orquestra as atividades.
