---
title: "3. Criando seu formulário de requisição"
hide_table_of_contents: true
draft: false
---


Nesta seção, você irá criar o formulário de requisição.

## Creator Studio – Tela de Edição

Esta é a tela de edição do Creator Studio. Na tela, você verá:
![](../images/2025-06-28-23-36-16.png)

1. **Form Elements**
     - Estes são os elementos que você pode arrastar e soltar na Área de Edição. Cada elemento possui diferentes funcionalidades.

2. **Editing Area**
     - Você arrasta e solta os Form Elements nesta área para configurar os elementos que usará para capturar informações do usuário.
     - Você também nomeia o formulário (“Untitled” abaixo), dá uma descrição e, potencialmente, uma imagem.

3. **Element Configuration**
     - Cada elemento possui diferentes opções de configuração, é aqui que você define o Label, Instruções, Tipo, etc., dos elementos.



## Edite seu formulário de requisição

Vamos começar dando um Nome e uma Descrição para o formulário. Essas informações serão usadas para corresponder ao que o usuário pesquisar no Service Portal.

**Opcional:** Você pode clicar no espaço reservado para a imagem e fazer upload de uma imagem, se tiver uma.  
  ![](../images/2025-06-28-23-37-49.png)


## Edite o formulário

1. Clique para editar **Question 1** e, no lado direito, altere os seguintes detalhes:  
Question label: **Gift card da loja da corporativa?**  
Content type: **Yes or no**  
Clique em **Save and close**
![](../images/2025-06-29-00-02-52.png)

1. Clique para editar **Question 2** e, assim como acima, altere os seguintes detalhes:  
Question label: **Valor**  
Text validation: **Number**
Clique em **Save and close**
![](../images/2025-06-28-23-40-57.png)

1. Clique para editar **Question 3**  
Question label: **Recebedor**  
Content type: **Record Choices**  
Source table: **User** \[sys_user\]  
![](./images/image013.png)
Clique em **Save and close**
![](../images/2025-06-28-23-41-50.png)

  **Nota:** para esta questão, escolhemos referenciar uma tabela do ServiceNow.

  Isso nos dá a opção de popular dinamicamente um popup com dados disponíveis  
  na plataforma.

4.  Adicione outro form element para capturar a **Justificativa**.  
  ![](./images/image014.png)
    - Com o form element inferior _Recipient_ selecionado – clique no **Plus +** que aparece abaixo do form element e escolha adicionar um  
    **Multi-line text** element.  
    - Clique na **Question 4** e edite o campo Question label para **Justificativa**.
  ![](../images/2025-06-28-23-44-22.png)
  Clique em **Save and close**  

5. Clique em **Mark as ready**
![](../images/2025-06-28-23-46-58.png)

6. Vamos definir o local em que o nosso formulário estará acessível em nosso portal. Clique em **Edit location setting**
![](../images/2025-06-28-23-47-40.png)

## Adicione sua aplicação de request a um Service Catalog

Você pode adicionar a aplicação, ou melhor, os Catalog Items do seu processo de request, a um ou mais Service Catalogs e Categorias.



1. Clique em **edit** para selecione o catálogo.
![](../images/2025-06-28-23-49-29.png)

2. Por enquanto, usaremos “Service Catalog” e a categoria “Can We Help You?”
![](../images/2025-11-11-09-30-11.png)

3.  Clique em **Save all settings**
![](../images/2025-11-11-09-31-06.png)

4. Clique novamente em **Mark as ready** e uma mensagem de sucesso deve ser exibida no topo da página.
![](../images/2025-06-28-23-52-33.png)
![](../images/2025-06-28-23-52-50.png)

## Visualize em várias experiências

O ServiceNow oferece diversas formas de consumir suas experiências. Nesta visualização, você poderá ver como seu request ficará em diferentes interfaces de usuário.

1. Você poderá retornar a essa visualização a qualquer momento para ver suas alterações.
2. Clique em **Preview**
![](../images/2025-06-28-23-54-01.png)
![](../images/2025-06-28-23-54-29.png)

  > Sinta-se à vontade para explorar essas visualizações – você pode voltar aqui depois.

3. Clique em **Fechar** para continuar
![](../images/2025-06-28-23-55-00.png)

## Seção Concluída

Parabéns, você criou o formulário para sua aplicação.

O próximo passo será projetar os processos que cuidam da aprovação pelo gerente do solicitante e pelo grupo de aprovação apropriado.
