AvaliaIF
📖 Sobre o Projeto
O AvaliaIF é um sistema de controle de aplicação de provas, desenhado para otimizar o fluxo de trabalho da coordenação pedagógica de institutos federais. A plataforma permite que os professores submetam suas minutas de prova, que são então avaliadas pelos coordenadores pedagógicos. Uma vez aprovadas, as minutas são automaticamente encaminhadas ao setor de logística para impressão, garantindo um processo mais ágil, transparente e eficiente.

✨ Funcionalidades Principais
O sistema foi projetado para atender às necessidades dos três principais perfis de usuários:

Professor:

Upload de minutas de provas em formato de documento.

Acompanhamento do status da avaliação de suas minutas (pendente, aprovado, reprovado).

Visualização de feedback dos coordenadores em caso de reprovação.

Coordenador Pedagógico:

Dashboard com a lista de minutas de provas pendentes de avaliação.

Visualização e download das minutas submetidas.

Aprovação ou reprovação das minutas com a possibilidade de adicionar comentários.

Setor de Logística:

Acesso a uma lista de provas aprovadas e prontas para impressão.

Download dos arquivos para impressão.

Marcação das provas como "impressas" para controle.

🚀 Stack de Tecnologias
Este projeto é construído utilizando tecnologias modernas e robustas para garantir uma experiência de usuário fluida e um sistema seguro e escalável.

Frontend:

React v19

Tailwind CSS v4.0

Backend:

Java 25

Spring Boot 3.4

Banco de Dados:

MySQL 8.4

🔧 Começando
Para executar o projeto em seu ambiente de desenvolvimento local, siga os passos abaixo.

Pré-requisitos
Certifique-se de que você tem as seguintes ferramentas instaladas em versões compatíveis:

Node.js (v22 ou superior)

JDK 25 (ou a LTS mais recente compatível)

Maven 3.9+

[link suspeito removido]

Um editor de código de sua preferência (ex: VSCode, IntelliJ IDEA).

Instalação
Clone o repositório:

Bash

git clone https://github.com/seu-usuario/avalia-if.git
Configuração do Backend:

Navegue até a pasta do backend:

Bash

cd avalia-if/backend
No arquivo application.properties (localizado em src/main/resources/), configure suas credenciais do MySQL.

Instale as dependências e execute o projeto:

Bash

mvn spring-boot:run
A API estará disponível em http://localhost:8080.

Configuração do Frontend:

Em outro terminal, navegue até a pasta do frontend:

Bash

cd avalia-if/frontend
Instale as dependências:

Bash

npm install
Inicie o servidor de desenvolvimento:

Bash

npm run dev
A aplicação estará acessível em http://localhost:3000.

📈 Uso
Após a instalação, você pode acessar a aplicação em seu navegador.

Login: Acesse o sistema utilizando um dos perfis de usuário (professor, coordenador ou logística).

Submissão de Prova (Professor): Navegue até a seção de submissão, preencha os detalhes da prova e faça o upload do arquivo da minuta.

Avaliação (Coordenador): No painel do coordenador, visualize as provas pendentes, analise o conteúdo e aprove ou reprove com feedback.

Impressão (Logística): O setor de logística receberá as provas aprovadas em sua interface, prontas para serem impressas.

🤝 Como Contribuir
Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será muito apreciada.

Se você tiver uma sugestão para melhorar este projeto, por favor, faça um fork do repositório e crie um pull request. Você também pode simplesmente abrir uma issue com a tag "enhancement".

Faça um Fork do projeto

Crie uma Branch para sua Feature (git checkout -b feature/AmazingFeature)

Faça o Commit de suas mudanças (git commit -m 'Add some AmazingFeature')

Faça o Push para a Branch (git push origin feature/AmazingFeature)

Abra um Pull Request
