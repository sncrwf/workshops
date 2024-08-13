---
id: prepare-env
title: Preparar Ambientes
hide_table_of_contents: true
---

# Preparar Ambientes

Antes de instalar o App Engine Studio, revise todos os requisitos da plataforma e defina uma estratégia de instância organizacional para preparar a instalação e configuração bem-sucedidas.

## Revisar requisitos da plataforma
- Licença do App Engine necessária
  - *Entre em contato com o Gerente de Contas da ServiceNow para obter informações adicionais sobre o App Engine ou veja [ServiceNow App Engine](https://www.servicenow.com/products/now-platform-app-engine.html)*
- As instâncias devem estar na mesma versão (por exemplo, Utah)
- O papel de administrador é necessário em todas as instâncias para instalar o App Engine Studio e aplicativos dependentes a partir da ServiceNow Store

## Definir estratégia de instância

Ao definir a estratégia de instância para o App Engine Studio, é recomendável utilizar uma instância de produção e pelo menos duas instâncias de subprodução – no entanto, o App Engine Studio pode suportar qualquer número de instâncias de subprodução como parte de uma estratégia de instância.

Os aplicativos são implantados na instância de produção após serem desenvolvidos e testados com sucesso nas instâncias de subprodução. Uma instância de subprodução servirá como o ambiente de desenvolvimento e a outra como o ambiente de teste.

Se sua organização usa ambientes de sandbox ou staging além de teste e desenvolvimento, eles podem ser incorporados na estratégia de instância de acordo com as necessidades organizacionais.

![relative](/img/lab-aemc/2023-07-07-12-06-36.png)
*Exemplo de estratégia de instância com uma instância de produção e três instâncias de subprodução*

Instâncias de subprodução que estão mais semelhantes configuradas à sua instância de produção são os melhores candidatos para ambientes de teste e staging. Dessa forma, os administradores podem encontrar mais precisamente os problemas que podem surgir se o aplicativo for implantado na produção.

:::note
Para mais informações, veja **[Documentação do Produto: Estratégia de Instância para App Engine Studio](https://docs.servicenow.com/csh?topicname=aes-instance-strategy.html&version=latest)**
:::
