---
title: "1. Securely Expand" 
sidebar_label: "1. Securely Expand"
hide_table_of_contents: true
---
# Visão Geral

Amanda implementou com sucesso seu aplicativo para sua equipe, e ele chamou a atenção de outra equipe que também deseja usá-lo. Uma condição principal é manter a privacidade dos registros entre as duas equipes.

Neste exercício, vamos compartimentalizar os casos de teletrabalho para os usuários do departamento de Desenvolvimento e para os usuários da equipe de Suporte ao Cliente.  

Vamos configurar isso definindo:

>1. Um papel de "fulfiller" para cada equipe: Fulfiller_Development e Fulfiller_Customer_Support 

>2. Em seguida, definiremos controles de acesso específicos para cada um.

>3. No final, uma equipe terá visibilidade apenas sobre solicitações dos usuários do departamento de Desenvolvimento, enquanto a outra equipe terá acesso apenas às solicitações dos usuários do departamento de Suporte ao Cliente. 

Isso garantirá que ambas as equipes possam usar o aplicativo mantendo a separação e privacidade necessárias dos dados.

Vamos começar.

Desenvolvedores cidadãos como Amanda precisam de privilégios especiais para configurar controles de acesso, então Amanda vai solicitar...

## Ajuda dos Administradores do App Engine

1.	Conecte-se como Admin

2. Elevar para Security Admin

    | Passos                                              | 
    |---------------------------------------|------------------------|
    |<span className="large-number">➊</span>| No canto superior direito, clique no **Avatar**  |
    |<span className="large-number">➋</span>| Selecione **Elevate role**    |
    |<span className="large-number">➌</span>| Marque [✔] security_admin   |
    |<span className="large-number">➍</span>| Clique em <span className="button-purple">Update</span>.   |

    ![](./images/segment_01_Elevate_Security_Admin.png)


3. Vá para **App Engine Studio > Security**

    | **Passos**                                              | 
    |---------------------------------------|------------------------|
    |<span className="large-number">➊</span>| No AES, clique em **More**  |
    |<span className="large-number">➋</span>| Clique em **Security**    |
    |<span className="large-number">➌</span>| Clique em **Add**   |

    ![](./images/segment_02_AES_Go_to_Security.png)

:::info
Quando Amanda criou o aplicativo, ele era apenas para uma equipe e ter um único papel de usuário era suficiente.
Agora que precisamos abrir o aplicativo para outra equipe, precisamos de papéis mais específicos para garantir a segurança adequada.
:::


4. Crie o papel **Fulfiller_Development**

    | **Passos**                                              | 
    |---------------------------------------|------------------------|
    |<span className="large-number">➊</span>| Clique em **build a new role**  |
    |<span className="large-number">➋</span>| Clique em <span className="button-purple">Continue</span>.   |

    ![](./images/segment_03_AES_Create_Role_01.png)



5. Dê um nome e descrição ao papel.

    | **Passos**                                             | 
    |-------------|-----------------------------------------|
    | Name        | Fulfiller_Development                   |
    | Description | Fulfiller in the Development department |

    ![](./images/segment_03_AES_Create_Role_02.png)


6. Dê ao papel as permissões desejadas

    ![](./images/segment_03_AES_Create_Role_03_Permission.png)

7. **Sucesso**

    Clique em <span className="button-purple">Done</span>.

    ![](./images/segment_03_AES_Create_Role_04_Success.png)


7. Repita os passos 4 a 7 para criar o papel **Fulfiller_Customer_Support**

    | **Passos**                                                  | 
    |-------------|----------------------------------------------|
    | Name        | Fulfiller_Customer_Support                   |
    | Description | Fulfiller in the Customer Support department |



8. Você deve ver os dois novos papéis no aplicativo

    ![](./images/segment_03_AES_Create_Role_05_Result.png)


## Refinar os controles de acesso 

1. **Navegar até a Lista de Controle de Acesso (ACL)**
    ![](./images/segment_04_ACL_01_Go_to_ACL.png)


2. **Filtrar a lista de registros**

    | **Filtro**                                     | 
    |-------------|---------------------------------|
    |<span className="large-number">➊</span>| Defina o filtro conforme mostrado abaixo |
    |<span className="large-number">➋</span>| Clique em **Run**    |
    |<span className="large-number">➌</span>| Clique em **Updated by** para obter o ACL do administrador no topo   |
    |<span className="large-number">➍</span>| Abra o primeiro registro  |

    ![](./images/segment_04_ACL_02_Filter_ACLs.png)


3. Revise o ACL 

4. Defina a condição: Aberto por alguém no departamento de Desenvolvimento

    1. Clique no campo de condição, role para baixo para selecionar **Show related fields**

        ![](./images/segment_04_ACL_03_Condition_01.png)

    2. Selecione "Opened by ⟹ User fields"

        ![](./images/segment_04_ACL_03_Condition_02.png)

    3. Clique novamente no campo e agora podemos ver os campos dentro do Opened by

        ![](./images/segment_04_ACL_03_Condition_03.png)

    4. Role para baixo e selecione **department**

        ![](./images/segment_04_ACL_03_Condition_04.png)
    
    5. Clique novamente no campo e depois selecione **Opened by Department**

        ![](./images/segment_04_ACL_03_Condition_05.png)

    6. Finalmente defina o valor da condição como **Development**

        ![](./images/segment_04_ACL_03_Condition_06.png)

    7. Salve o registro

        ![](./images/segment_04_ACL_03_Condition_07_Save_ACL.png)

    8. Observe que o ServiceNow gerou uma descrição

        ![](./images/segment_04_ACL_03_Condition_08.png)

    9. Para garantir o acesso aos dados, vamos revisar os outros ACL do nosso trabalho 

        Precisamos excluir qualquer ACL que não tenha nenhuma restrição

        ![](./images/segment_04_ACL_03_Delete_ACL_with_no_restriction.png)

         
## Atribuir o papel a Abel

### Abrir o usuário Abel

1. Vá para a lista de usuários

    | Passos                                              | 
    |---------------------------------------|------------------------|
    |<span className="large-number">➊</span>| Clique no menu **All**  | 
    |<span className="large-number">➋</span>| Pesquise por **Users**    |
    |<span className="large-number">➌</span>| Clique em **Users**      |

    ![](./images/06-Create-new-user-1.png)


2. Abra o usuário **Abel**

    ![](./images/segment_04_Assign_Role_01.png)


3. Clique em **Edit** Roles

    ![](./images/segment_04_Assign_Role_02.png)


4. Conceda a Abel o papel de usuário de teletrabalho

    ![](./images/segment_04_Assign_Role_03.png)


## Vamos testar

1. Vá para o App Engine Studio


2. Visualize a tabela de casos de teletrabalho

    ![](./images/segment_04_Test_01.png)


3. Observe que podemos ver todos os registros

    ![](./images/segment_04_Test_02.png)


4. Volte para a visão de admin e Importe **Abel**

    ![](./images/segment_04_Test_03.png)


5. Volte para a lista de casos de teletrabalho e observe que podemos ver todos os registros

    ![](./images/segment_04_Test_04.png)
