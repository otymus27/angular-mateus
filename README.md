# Criar projeto angular do zero e integrar com github

## 1. **Pré-requisitos**

Certifique-se de ter instalado:

-  **Node.js**: https://nodejs.org/
-  **Angular CLI**: npm install -g @angular/cli
-  **Git**: https://git-scm.com/

## 2. **Criar projeto Angular**

Abra o terminal/prompt e execute:

-  ng new nome-do-projeto

Exemplo:

-  ng new projeto-angular

> Durante a criação, ele vai perguntar:
>
> -  Se deseja adicionar o Angular Routing? (Sim ou não)
> -  Qual tipo de folha de estilo usar (CSS, SCSS, etc.)

## 3. Acessar a pasta do projeto

-  cd projeto-angular

## 4. Inicializar Git no projeto

-  git init

## 5. Criar um `.gitignore`

Se você criou o projeto com o Angular CLI, ele já vem com `.gitignore`.

Mas verifique se o conteúdo inclui:
/node_modules
/dist
.env

## 6. Fazer primeiro commit

-  git add .
-  git commit -m "Primeiro commit: projeto Angular criado"

## 7. Criar repositório remoto no GitHub

Acesse: https://github.com/new

-  Nome do repositório: `projeto-angular-git`
-  **Não** marque para adicionar README, .gitignore ou license (já temos localmente)

---

## 🔗 8. Conectar ao repositório remoto

Copie a URL do repositório, por exemplo:

-  git remote add origin https://github.com/usuario/projeto-angular-git.git

## 9. Enviar projeto para o GitHub

-  git branch -M main
-  git push -u origin main

## 10. Para verificar se foi para o repositório do git só acessar no navegador

Acesse: `https://github.com/usuario/projeto-angular

Você verá o projeto enviado com o histórico do commit.

## 11. Para rodar o projeto e ver no navegador

Digite o comando:

-  ng serve
   E acesse: http://localhost:4200

**Clonar projeto do GitHub e executar localmente**

## 1. Clone o repositório

-  git clone https://github.com/seu-usuario/projeto-angular.git
-  cd projeto-angular

## 2. Instale as dependências

-  npm install

## 3. Rode o servidor de desenvolvimento

-  ng serve

E pronto pode acessar sua pagina no navegador pelo endereço: http://localhost:4200

**Caso tenha feito alterações no projeto e deseja subi-las para o repositório remoto ou github**
Perfeito! Para subir suas alterações no projeto Angular para o repositório remoto (GitHub),
siga este passo a passo no terminal, dentro da pasta do projeto:

## 1. Verifique os arquivos modificados(opcional):

-  git status
   Isso vai mostrar os arquivos que foram alterados, adicionados ou deletados.

## 2. Adicionae as alterações para commit:

-  git add .
   Isso adiciona todos os arquivos modificados.
   Se quiser adicionar arquivos específicos, use: git add nome-do-arquivo.

## 3. Crie um commit com uma mensagem:

-  git commit -m "Descreva aqui o que foi alterado"
   Exemplo:
-  git commit -m "Adicionado componente de login"

## 4. Envie para o repositório remoto:

-  git push origin main

Use main se sua branch principal se chama main.
Caso seja master, use:

-  git push origin master

**Criar uma nova branch no projeto com github**

-  git checkout -b nome-da-branch

Esse comando faz duas coisas:

1. Cria uma nova branch com o nome que você especificar
2. Muda para essa nova branch automaticamente.

Exemplo prático:
Se você quiser criar uma branch chamada feature/login, execute:
git checkout -b feature/login

Verificar se a branch foi criada e ativada:

-  git branch

O \* indicará em qual branch você está no momento.

Subir a nova branch para o repositório remoto:
git push -u origin feature/login

Substitua feature/login pelo nome da sua branch.

## Interpolação de dados

-  A interpolação de dados é um recurso que vai nos ensinar a trabalhar com os componentes do Angular;
-  Vamos criar nossas variáveis no arquivo.ts, dentro da classe;
-  Ou seja, estas variáveis são propriedades da classe;
-  E então teremos acesso a estes dados no arquivo .html, o template;
-  A impressão é feita através de: {{nome_da_variavel}}
