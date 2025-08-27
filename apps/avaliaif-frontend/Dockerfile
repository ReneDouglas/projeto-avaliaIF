# Estágio 1: Build - Onde a aplicação é construída
FROM node:22-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de gerenciamento de pacotes para aproveitar o cache do Docker
COPY package.json ./
COPY package-lock.json ./

# Instala as dependências de forma otimizada para CI/CD
RUN npm ci

# Copia o restante do código-fonte da aplicação
COPY . .

# Executa o build de produção
RUN npm run build


# Estágio 2: Production - Onde a aplicação é servida
FROM nginx:stable-alpine

# Copia os arquivos estáticos gerados no estágio de build para o diretório padrão do Nginx
# A pasta "dist" é o padrão de output do Vite, ajuste se for diferente
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração customizado do Nginx para o contêiner
# Este arquivo é essencial para o roteamento de Single Page Applications (SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 8080. O Railway irá mapeá-la automaticamente.
EXPOSE 8080

# O comando para iniciar o Nginx já está na imagem base, não precisamos de um CMD.