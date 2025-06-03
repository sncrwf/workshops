---
id: vm-connect
title: "Conectando à VM"
pagination_label: "2. Conectando à VM"
sidebar_label: "2. Conectando à VM"
hide_table_of_contents: true
draft: false
---

Uma Máquina Virtual (VM) Windows é necessária para completar este laboratório. O endereço IP e as credenciais de login foram fornecidos durante a inscrição. Se você estiver usando um laptop Mac, certifique-se de que o Microsoft Remote Desktop App esteja instalado como pré-requisito para este laboratório.



## macOS
:::danger
Se estiver usando um laptop com **Windows**, vá para a próxima sessão deste guia para conectar-se à VM usando o **RDP do Windows**.
:::

1. Acessando Máquina Virtual (VM) Windows utilizando **macOS**
   
	1.	Abra a App Store e pesquise por: `Windows App`
	3.	Clique em “Obter” e depois em “Instalar”.
      ![](../images/2025-06-03-09-25-49.png)
	4.	Após a instalação, abra o app `Windows App`.

   1. Clique no **sinal de mais** e depois clicando em **Adicionar PC**.

        ![Alt text](img/2023-10-02_10-45-22.png)

   2. Copie o **endereço IP** da página de registro e insira-o em **Nome do PC** (1) e insira **Lab VM** em **Nome Amigável** (2). Em seguida, clique em **Adicionar** (3).

          ![Alt text](img/2023-10-02_10-42-52.png)
          ![Alt text](img/2023-10-02_10-43-27.png)

       > O **endereço IP** é apenas o valor dentro dos colchetes **[]** na linha do Windows Server.

   3. Clique duas vezes na nova VM que foi adicionada ao RDP.

       ![Alt text](img/2023-10-02_10-44-16.png)
       
       Em seguida, clique em **Continuar**.

   4. Insira as credenciais de login do Windows Server fornecidas durante o registro em **Nome de usuário** (1) e **Senha** (2) e depois clique em **Continuar** (3).

       ![Alt text](img/2023-10-02_10-47-21.png)

       > Clique em **Mostrar Senha** para garantir que a senha inserida está correta.
       
   5. Clique em **Continuar** mais uma vez para conectar à VM. Após conectar-se à VM, vá para o **Passo 11** para concluir a configuração inicial.

       ![Alt text](img/2023-10-02_10-47-51.png)

## Windows

2. Acessando Máquina Virtual (VM) Windows utilizando **Windows**

   1.	Verifique se o RDP está disponível:
      Pressione `Win + R`, digite `mstsc` e pressione `Enter`. Se a janela “Conexão de Área de Trabalho Remota” abrir, o recurso está disponível.
      ![](../images/2025-06-03-09-31-04.png)
      ![](../images/2025-06-03-09-32-06.png)

    2. Abra o Remote Desktop Protocol (RDP). Em seguida, copie o **endereço IP** da página de registro e insira-o em **Computador** (1) e clique em **Conectar** (2).

       ![Alt text](img/2023-10-02_10-48-30.png)

       ![Alt text](img/2023-10-02_10-49-01.png)
       > O **endereço IP** é apenas o valor dentro dos colchetes **[]** na linha do Windows Server.

    2. Clique em **Mais opções**.

       ![Alt text](img/2023-10-02_10-49-23.png)

    3. Clique em **Usar uma conta diferente**.

       ![Alt text](img/2023-10-02_10-49-51.png)

    4. Digite **Administrador** para Nome de usuário (1) e a **senha do laboratório** para Senha (2). Em seguida, clique em **OK** (3).

       ![Alt text](img/2023-10-02_10-50-20.png)

    5. Clique em **Sim** para confirmar a conectividade com a VM.

       ![Alt text](img/2023-10-02_10-50-43.png)

Uma vez conectado à VM do laboratório, observe que o software RPA já está pré-instalado e acessível na Área de Trabalho. Se você não ver o ícone do RPA Desktop Design Studio, por favor, informe seu instrutor, pois você precisará disso para construir a automação RPA.

![Alt text](img/2023-10-02_10-54-22.png)


Antes de começar, é recomendado alterar o navegador padrão para o Chrome. Isso pode ser feito digitando **Navegador Padrão** (1) na Barra de Pesquisa do Windows e clicando em **Escolher um navegador da web padrão** (2).

![Alt text](img/2023-10-02_10-57-38.png)

 Clique em **Internet Explorer** sob **Navegador da Web** e selecione **Google Chrome**. Em seguida, feche a janela.

 ![Alt text](img/chrome.gif)
