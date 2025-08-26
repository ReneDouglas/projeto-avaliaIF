# ---- ESTÁGIO 1: Build ----
# Usamos uma imagem Node para ter as ferramentas de build (npm)
FROM node:22-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de definição de pacotes e instala as dependências
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copia o restante do código-fonte da aplicação
COPY . .

# Comando principal: Gera os arquivos estáticos otimizados para produção
RUN npm run build


# ---- ESTÁGIO 2: Produção ----
# Usamos uma imagem Nginx super leve para servir os arquivos estáticos
FROM nginx:stable-alpine

# Copia os arquivos gerados no estágio de build para a pasta padrão do Nginx
# O resultado do "npm run build" geralmente fica na pasta /dist
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80, que é a porta padrão do Nginx
EXPOSE 80

# O comando padrão da imagem Nginx já inicia o servidor, mas podemos ser explícitos
CMD ["nginx", "-g", "daemon off;"]