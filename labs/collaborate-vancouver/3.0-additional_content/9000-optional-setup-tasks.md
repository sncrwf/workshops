---
id: optional-tasks
title: Tarefas Opcionais de Configuração
---

# Tarefas Opcionais de Configuração do App Engine Studio

:::caution
Esta parte do laboratório é apenas para fins informativos. Nenhuma atividade é necessária.
:::

Como parte da configuração do App Engine Studio, você pode explorar e configurar o seguinte:

---
## Conectar spokes no Ambiente de Desenvolvimento

:::caution
Esta etapa não é necessária como parte da configuração inicial do App Engine Studio.
:::

Um spoke é uma aplicação escopo que contém ações ou Subflows do Flow Designer ou do Integration Hub.

Os Administradores de Sistema podem conectar os spokes do IntegrationHub ao App Engine Studio, permitindo que os desenvolvedores integrem aplicações personalizadas com sistemas de terceiros. Por exemplo, conectar o spoke do Slack permite que os desenvolvedores publiquem uma mensagem contendo detalhes do Incidente em um canal específico do Slack toda vez que um Incidente de alta prioridade é criado.

Muitos spokes do Integration Hub estão disponíveis, mas nem todos precisam ser conectados ao App Engine Studio. Revise alguns dos spokes comuns abaixo e instale-os com base nas necessidades organizacionais.

<table class="myTable">
  <thead>
    <tr>
      <th>Spoke do Integration Hub</th>
      <th>Instalar este spoke fornece aos desenvolvedores</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Microsoft Teams</td>
      <td>Ações para suportar comunicações e colaborações interfuncionais no Microsoft Teams.</td>
    </tr>
    <tr>
      <td>Slack</td>
      <td>Ações para automatizar a gestão de canais, usuários e assinaturas de software do Slack.</td>
    </tr>
    <tr>
      <td>Jira</td>
      <td>Ações para automatizar tarefas no Jira para gerenciar usuários, problemas, projetos e o ciclo de vida do desenvolvimento de software.<br/>Sincronizar dados no ServiceNow com Jira para aumentar a colaboração entre usuários do ServiceNow e equipes de DevOps.</td>
    </tr>
    <tr>
      <td>Gmail</td>
      <td>Ações para automatizar a gestão de e-mails e etiquetas no Google Gmail.</td>
    </tr>
    <tr>
      <td>Azure AD</td>
      <td>Ações para automatizar tarefas do Microsoft Azure Active Directory para gestão de usuários, autenticação e associação a grupos.</td>
    </tr>
    <tr>
      <td>Twitter</td>
      <td>Ações para automatizar a postagem de mensagens e conteúdo multimídia em um feed de notícias corporativo do Twitter.</td>
    </tr>
    <tr>
      <td>MS 365 Excel</td>
      <td>Ações para automatizar a gestão de planilhas, tabelas e células no Microsoft Excel.</td>
    </tr>
  </tbody>
</table>

À medida que o programa de desenvolvimento de cidadãos da sua organização amadurece e escala, spokes adicionais podem ser instalados e conectados com base na demanda de aplicações e casos de uso.

:::note
Para mais informações sobre integrações com sistemas de terceiros, consulte **[Documentação do Produto: Integration Hub](https://docs.servicenow.com/csh?topicname=integrationhub.html&version=latest)**
:::

---
## Revisar as Configurações de Acesso ao Flow Designer

:::caution
Esta etapa não é necessária como parte da configuração inicial do App Engine Studio.
:::

Revise e atualize as configurações de acesso dos desenvolvedores do App Engine Studio no ambiente de desenvolvimento para os Recursos do Flow Designer e atualize conforme necessário.

Os desenvolvedores podem aproveitar as capacidades do Flow Designer ao criar lógica e automação para aplicações personalizadas.

Considere restringir o acesso dos desenvolvedores aos Recursos do Flow Designer usando filtragem de conteúdo para o Flow Designer. Isso permite que os administradores gerenciem o acesso aos recursos do Flow Designer e especifiquem quais recursos os usuários do App Engine Studio podem utilizar ao construir aplicações.

![relative](/img/lab-aemc/2023-07-07-16-49-07.png)

O acesso ao Flow Designer a partir do App Engine Studio pode ser atualizado posteriormente para fornecer aos desenvolvedores as capacidades de edição que melhor atendem à sua experiência e necessidades.

:::note
Para mais informações sobre recursos do Flow Designer, consulte **[Documentação do Produto: Filtragem de Conteúdo para Flow Designer](https://docs.servicenow.com/csh?topicname=content-filtering-flow-designer.html&version=latest)**
:::

---
## Revisar as Configurações de Acesso ao Catálogo de Serviços

:::caution
Esta etapa não é necessária como parte da configuração inicial do App Engine Studio.
:::

Revise o acesso dos desenvolvedores do App Engine Studio no ambiente de desenvolvimento às templates de itens de catálogo e catálogos/categorias da Ferramenta de Criação de Catálogos e atualize o acesso conforme necessário.

Por padrão, os desenvolvedores do App Engine Studio podem usar templates de catálogo para criar rapidamente produtores de registros ou itens de catálogo. Os desenvolvedores também podem publicar itens de catálogo em qualquer catálogo. Se você deseja limitar o acesso a templates ou restringir o acesso à publicação para catálogos ou categorias, atualize o acesso conforme necessário na Ferramenta de Criação de Catálogos.

![relative](/img/lab-aemc/2023-07-07-16-53-48.png)

O acesso ao catálogo a partir do App Engine Studio pode ser atualizado posteriormente para modificar o acesso dos desenvolvedores aos catálogos, categorias e templates de catálogo do App Engine Studio.

Para mais informações sobre a criação ou edição de itens de catálogo, consulte **[Documentação do Produto: Ferramenta de Criação de Catálogos](https://docs.servicenow.com/csh?topicname=catalog-builder.html&version=latest)**

---

## Configurar Instância de Testes

:::caution
Esta etapa não é necessária como parte da configuração inicial do App Engine Studio.
:::

Implante aplicações personalizadas com confiança configurando definições de Verificação de Instância para monitorar a saúde da instância durante o processo de implantação. As verificações de instância interrogam sua instância quanto a configurações e problemas de saúde, permitindo que os administradores abordem as melhores práticas e evitem problemas de configuração semelhantes no futuro.

As definições de Verificação de Instância são executadas automaticamente quando as aplicações do App Engine Studio são promovidas para a instância **Testing**. Os resultados da Verificação de Instância serão registrados na seção de Notas do registro de Solicitação de Implantação.

A aplicação App Engine Studio não é fornecida com definições de Verificação de Instância prontas para uso (no entanto, algumas definições de Verificação de Instância são instaladas com o plugin Deployment Pipeline para executar verificações básicas de desempenho).

Trabalhe com desenvolvedores profissionais do ServiceNow para configurar definições de Verificação de Instância e impor as melhores práticas em seus ambientes.

![relative](/img/lab-aemc/2023-07-07-16-56-31.png)

**Habilite e configure as propriedades de Verificação de Instância em sua instância de produção se você planeja clonar!**

:::note
Para mais informações sobre o gerenciamento de verificações de saúde da instância, consulte **[Documentação do Produto: Verificação de Instância](https://docs.servicenow.com/csh?topicname=hs-landing-page.html&version=latest)**
:::
