---
id: personas
title: Personas e Papéis
hide_table_of_contents: true
---

# Personas e Papéis

:::caution
Esta parte do laboratório é apenas para fins informativos. Nenhuma atividade é necessária.
:::

---
# Administrador de Sistema

## Responsabilidades

- Instalar e configurar o App Engine Studio e suas dependências
- Definir ambientes e configurar pipelines
- Provisionar acesso ao grupo de administradores do App Engine Studio
- Atualizar o aplicativo App Engine Studio, quando aplicável
- Definir regras para quais Administradores do App Engine Studio podem aprovar ou rejeitar solicitações de entrada de aplicativos
- Colaborar com desenvolvedores profissionais do ServiceNow para criar definições de Verificação de Instância para a plataforma
- Colaborar com o(s) Administrador(es) do App Engine Studio para resolver conflitos de aplicativos que surgem na plataforma

### Papel necessário: 
- admin

---

# Administrador do App Engine Studio

## Responsabilidades

- Gerenciar processos e propriedades do App Engine Studio
- Revisar e aprovar / rejeitar solicitações de aplicativos enviadas, com base nas regras de entrada definidas pelo administrador do sistema
- Provisionar acesso de usuários do App Engine Studio
- Revisar aplicativos do App Engine Studio enviados
- Gerenciar solicitações de implantação
- Gerenciar a promoção de aplicativos do App Engine Studio entre instâncias
- Executar testes / suítes ATF na instância de teste
- Garantir que a Verificação de Instância seja executada com definições apropriadas
- Colaborar com o administrador do sistema para resolver conflitos de aplicativos que surgem na plataforma

### Papel(is) necessário(s):
- sn_app_eng_studio.admin
- atf_test_designer
- scan_admin

---

# Desenvolvedor Profissional do ServiceNow

## Responsabilidades

- Construir e testar aplicativos no ServiceNow Studio e App Engine Studio
- Colaborar com desenvolvedores cidadãos, conforme necessário, para entregar aplicativos no App Engine Studio, incluindo:
  - Garantir que as melhores práticas de desenvolvimento de aplicativos e organizacionais sejam seguidas pelos desenvolvedores cidadãos
  - Auxiliar na revisão e teste de aplicativos do App Engine Studio enviados
- Construir configurações complexas envolvendo UI Builder, Mobile App Builder, Flow Designer ou outras ferramentas de construção
- Criar testes / suítes ATF para aplicativos
- Colaborar com o administrador do sistema para criar definições de Verificação de Instância para a plataforma

### Papel(is) necessário(s):
- delegated_developer
- sn_app_eng_studio.user
- atf_test_admin
- scan_admin

---

# Desenvolvedor Low-Code / Cidadão

## Responsabilidades

- Enviar solicitações para novos aplicativos personalizados para construir no App Engine Studio
- Compreender as melhores práticas de ServiceNow e desenvolvimento de aplicativos
- Construir e testar aplicativos no App Engine Studio
- Enviar aplicativos desenvolvidos do App Engine Studio para revisão de TI
- Manter e modificar o aplicativo durante seu ciclo de vida, se determinado durante o processo de entrada

### Papel necessário:
- sn_app_eng_studio.user

:::info
Na versão Utah, o grupo ‘**App Engine Studio Users Limited**’ foi adicionado para permitir que os administradores do AES concedam aos desenvolvedores designados ao grupo a capacidade de colaborar em aplicativos existentes sem a possibilidade de criar novos aplicativos ou acessar templates.
:::
