# AvaliaIF

![Badge de Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Badge da Licença](https://img.shields.io/badge/license-MIT-blue)

## 📖 Sobre o Projeto

O **AvaliaIF** é um sistema de controle de aplicação de provas, desenhado para otimizar o fluxo de trabalho da coordenação pedagógica de institutos federais. A plataforma permite que os professores submetam suas minutas de prova, que são então avaliadas pelos coordenadores pedagógicos. Uma vez aprovadas, as minutas são automaticamente encaminhadas ao setor de logística para impressão, garantindo um processo mais ágil, transparente e eficiente.

## ✨ Funcionalidades Principais

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

* **Frontend:**
    * [React](https://react.dev/) v19
    * [Tailwind CSS](https://tailwindcss.com/) v4.0
* **Backend:**
    * [Java](https://www.oracle.com/java/technologies/downloads/) 21
    * [Spring Boot](https://spring.io/projects/spring-boot) 3.4
* **Banco de Dados:**
    * [MySQL](https://www.mysql.com/) 8.4

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
