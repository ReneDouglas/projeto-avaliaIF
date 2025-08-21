# AvaliaIF

![Badge de Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Badge da Licença](https://img.shields.io/badge/license-MIT-blue)

# 📖 Sobre o Projeto

O **AvaliaIF** é um sistema de controle de aplicação de provas, desenhado para otimizar o fluxo de trabalho da coordenação pedagógica de institutos federais. A plataforma permite que os professores submetam suas minutas de prova, que são então avaliadas pelos coordenadores pedagógicos. Uma vez aprovadas, as minutas são automaticamente encaminhadas ao setor de logística para impressão, garantindo um processo mais ágil, transparente e eficiente.

# 🚀 Tecnologias Utilizadas

Para garantir que todos trabalhem com as mesmas ferramentas, listamos abaixo as tecnologias e suas versões. Siga os passos para instalar cada uma.

## Node.js e NPM

O Node.js é um ambiente de execução para JavaScript e o NPM é seu gerenciador de pacotes. Usaremos ambos para o projeto frontend em React. A forma mais recomendada de instalação é através de um gerenciador de versões, como o NVM (Node Version Manager).

### Instalação (Linux/macOS)
```bash
# Instala o NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Recarregue seu terminal e depois instale a versão correta do Node.js
nvm install 22
nvm use 22
```
### Instalação (Windows)
Baixe e instale o [nvm-windows](https://github.com/coreybutler/nvm-windows/releases). Depois, abra um novo terminal como administrador:
```bash
nvm install 22
nvm use 22
```
### Verificar instalação
```bash
node -v  # Deve retornar v22.x.x
npm -v   # Deve retornar 10.x.x
```

## Java (JDK)

- JDK `v21` (`OpenJDK`, `Eclipse Temurin`, `Amazon Corretto` ou qualquer outra distribuição livre de sua preferência)
O Java Development Kit (JDK) é necessário para compilar e executar nosso projeto backend.

### Instalação (Linux/macOS/Windows com WSL)
Recomendamos usar o [SDKMAN!](https://sdkman.io/usage) para gerenciar as versões do Java.
```bash
# Instala o SDKMAN!
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"

# Instala o Java 21
sdk install 21.0.4-tem
```
### Instalação Manual (Windows)
Baixe o OpenJDK 21 (por exemplo, o [Eclipse Temurin](https://adoptium.net/pt-BR)) e siga as instruções do instalador para configurar as variáveis de ambiente.

### Verificação
```bash
java -version  # Deve exibir a versão 21.x.x
```

## MySQL

- MySQL Server `v8.0`
**Não é necessário instalar o MySQL localmente**, pois ele será executado através do Docker.

## Docker

O Docker nos ajudará a criar um ambiente padronizado para rodar a aplicação (backend e banco de dados).

### Instalação
Acesse o site oficial do [Docker](https://docs.docker.com/get-started/get-docker) e baixe o **Docker Desktop** para o seu sistema operacional (Windows, macOS ou Linux). O instalador é simples e intuitivo.

### Verificar a instalação
```bash
docker --version  # Deve retornar a versão do Docker instalada
```

# 📥 Baixando e Configurando o Projeto

Siga estes passos para obter o código e preparar o ambiente.

## Clonar o repositório
Abra seu terminal, navegue até a pasta onde deseja salvar o projeto e execute o comando abaixo.
```bash
git clone git@github.com:ReneDouglas/projeto-avaliaIF.git
cd <NOME_DO_REPOSITÓRIO>
```

## Instalar as dependências do Frontend
Para garantir que todos usem exatamente as mesmas versões das bibliotecas, usaremos o comando `npm ci`. Ele instala as dependências a partir do arquivo `package-lock.json`.
```bash
# Navegue até a pasta do frontend
cd frontend

# Instale as dependências exatas
npm ci
```
O backend (Java/Spring) terá suas dependências baixadas automaticamente pelo Maven/Gradle quando o Docker for iniciado.

# 🐳 Executando o Projeto com Docker

Com o Docker, podemos subir todo o ambiente (backend, frontend e banco de dados) com um único comando.

## Inicie o Docker Desktop
Certifique-se de que o Docker Desktop esteja em execução na sua máquina.

## Suba os containers
Na raiz do projeto (onde o arquivo `docker-compose.yml` está localizado), execute:
```bash
docker compose up --build -d
```
- `up`: Cria e inicia os containers.
- `--build`: Força a reconstrução das imagens. Use isso na primeira vez ou quando houver alterações nos arquivos de configuração (`Dockerfile`, `package.json`, etc.).
- `-d`: (detached) Executa os containers em segundo plano.

Para subir os containers sem a necessidade de realizar o `build` , utilize o comando abaixo ou execute-os via Docker Desktop.
```bash
docker compose up -d
```

## Acesse os serviços
- Frontend (React com Hot Reload): http://localhost:3000
- Backend (Java/Spring): http://localhost:8080

O Hot Reload está configurado para o frontend. Qualquer alteração que você fizer nos arquivos do React será refletida automaticamente no navegador.

## O que fazer se uma dependência for atualizada ou adicionada?
Se você adicionar uma nova biblioteca no `package.json` (frontend) ou no `pom.xml` (backend), a imagem Docker precisa ser reconstruída.

### 1. Pare os containers atuais
```bash
docker compose down
```

### 2. Reconstrua e suba os containers novamente
```bash
docker compose up --build -d
```
Este comando irá recriar as imagens, baixando as novas dependências, e iniciar os containers atualizados.

# 💻 Guia de Desenvolvimento

Para manter o projeto organizado, seguiremos um fluxo de trabalho padrão com Git.

## Criação de uma Nova Branch
Nunca trabalhe diretamente nas branches `main` ou `development`. Para cada nova funcionalidade (`feature`) ou correção (`bugfix`), crie sua própria branch a partir da `development`.

- **Padrão de nome:** `feature/task-{id}-{descrição-curta}`
  - {`id`}: O número da tarefa no nosso quadro de gestão do **GitProjects**.
  - {`descrição-curta`}: Duas ou três palavras que resumem a tarefa (ex: `cria-tela-login`).
- **Comandos**
  ```bash
  # 1. Mude para a branch 'develop' e garanta que ela esteja atualizada
  git checkout develop
  git pull origin develop

  # 2. Crie sua nova branch e mude para ela
  git checkout -b feature/task-12-cria-tela-login
  ```
## Boas Práticas de Commits
Commits são "checkpoints" do seu trabalho. Mensagens claras ajudam a entender o histórico do projeto. Usaremos o padrão **Conventional Commits**.

- **Formato:** `<prefixo>: <mensagem curta e descritiva>`
- **Prefixos Comuns:**
  - `feat`: Para uma nova funcionalidade (feature).
  - `fix`: Para uma correção de bug.
  - `docs`: Para alterações na documentação (README.md, etc.).
  - `style`: Para formatação de código, ponto e vírgula, etc. (sem alteração de lógica).
  - `refactor`: Para refatoração de código que não altera a funcionalidade.
  - `chore`: Para tarefas de manutenção, como atualização de dependências.

### Exemplo de um bom commit
```bash
# Adicione os arquivos que você modificou
git add .

# Faça o commit com uma mensagem clara
git commit -m "feat: adiciona formulário de login com validação de campos"
```
## Envio dos Commits para o Repositório Remoto
Após realizar seus commits na sua branch, envie-os para o GitHub.

```bash
# O comando abaixo envia sua branch local para o repositório remoto (origin)
git push origin feature/task-12-cria-tela-login
```

## Criar Pull Request

O que é um Pull Request e como solicitá-lo?

Um Pull Request (PR) é um pedido formal para que seu código (da sua branch) seja revisado e incorporado (`merged`) à branch `development`. É uma oportunidade para que outros colegas revisem seu trabalho antes que ele entre na base principal do código.

### Como solicitar no GitHub

1. Após fazer o `git push` da sua **branch**, acesse a página do repositório no GitHub.
2. Você verá um aviso amarelo com o nome da sua branch e um botão "Compare & pull request". Clique nele.
3. A página de criação do PR será aberta.
4. Verifique se a branch `base` é a `development` e a compare é a sua **branch** (feature/...).
5. Dê um título claro ao seu PR (ex: "Feature: Implementa tela de login").
6. Escreva uma breve descrição do que foi feito e por quê. Se houver uma tarefa relacionada, mencione o ID dela (#3, por exemplo).
7. Clique em "Create pull request".

Pronto! Agora os outros membros da equipe serão notificados para revisar seu código.

# ✨ Funcionalidades Principais

O sistema foi projetado para atender às necessidades dos três principais perfis de usuários:

* **Professor:**
    * Upload de minutas de provas em formato de documento.
    * Acompanhamento do status da avaliação de suas minutas (pendente, aprovado, reprovado).
    * Visualização de feedback dos coordenadores em caso de reprovação.

* **Coordenador Pedagógico:**
    * Dashboard com a lista de minutas de provas pendentes de avaliação.
    * Visualização e download das minutas submetidas.
    * Aprovação ou reprovação das minutas com a possibilidade de adicionar comentários.

* **Setor de Logística:**
    * Acesso a uma lista de provas aprovadas e prontas para impressão.
    * Download dos arquivos para impressão.
    * Marcação das provas como "impressas" para controle.

## 🚀 Stack de Tecnologias

Este projeto é construído utilizando tecnologias modernas e robustas para garantir uma experiência de usuário fluida e um sistema seguro e escalável.

* Node.js: **v22.x**
* NPM: **v10.x**
* MySQL Server: **8.0**

* **Frontend:**
    * React: **v19**
    * Tailwind CSS: **v4.0**
* **Backend:**
    * JDK: **21** (Amazon Corretto)
    * Spring Boot: **3.5.x**

## 🔧 Começando

Para executar o projeto em seu ambiente de desenvolvimento local, siga os passos abaixo.

### Pré-requisitos

Certifique-se de que você tem as seguintes ferramentas instaladas em versões compatíveis:

* [Node.js](https://nodejs.org/en/) (v22 ou superior)
* [JDK 21](https://www.oracle.com/java/technologies/downloads/#jdk25)
* [Maven](https://maven.apache.org/download.cgi) 3.9+
* [MySQL Server 8.0](https://dev.mysql.com/downloads/mysql/)
* Um editor de código de sua preferência (ex: [VSCode](https://code.visualstudio.com/), [IntelliJ IDEA](https://www.jetbrains.com/idea/)).

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/avalia-if.git](https://github.com/seu-usuario/avalia-if.git)
    ```

2.  **Configuração do Backend:**
    * Navegue até a pasta do backend:
        ```bash
        cd avalia-if/backend
        ```
    * No arquivo `application.properties` (localizado em `src/main/resources/`), configure suas credenciais do MySQL.
    * Instale as dependências e execute o projeto:
        ```bash
        mvn spring-boot:run
        ```
    * A API estará disponível em `http://localhost:8080`.

3.  **Configuração do Frontend:**
    * Em outro terminal, navegue até a pasta do frontend:
        ```bash
        cd avalia-if/frontend
        ```
    * Instale as dependências:
        ```bash
        npm install
        ```
    * Inicie o servidor de desenvolvimento:
        ```bash
        npm run dev
        ```
    * A aplicação estará acessível em `http://localhost:3000`.

## 📈 Uso

Após a instalação, você pode acessar a aplicação em seu navegador.

1.  **Login:** Acesse o sistema utilizando um dos perfis de usuário (professor, coordenador ou logística).
2.  **Submissão de Prova (Professor):** Navegue até a seção de submissão, preencha os detalhes da prova e faça o upload do arquivo da minuta.
3.  **Avaliação (Coordenador):** No painel do coordenador, visualize as provas pendentes, analise o conteúdo e aprove ou reprove com feedback.
4.  **Impressão (Logística):** O setor de logística receberá as provas aprovadas em sua interface, prontas para serem impressas.

## 🤝 Como Contribuir

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

Se você tiver uma sugestão para melhorar este projeto, por favor, faça um fork do repositório e crie um pull request. Você também pode simplesmente abrir uma issue com a tag "enhancement".

1.  Faça um *Fork* do projeto
2.  Crie uma *Branch* para sua Feature (`git checkout -b feature/AmazingFeature`)
3.  Faça o *Commit* de suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4.  Faça o *Push* para a Branch (`git push origin feature/AmazingFeature`)
5.  Abra um *Pull Request*

## 📧 Contato

Seu Nome - seu.email@example.com
