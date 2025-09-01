# ---- ESTÁGIO 1: Build Otimizado ----
# Usar uma imagem que já vem com Maven e JDK 21
FROM maven:3.9-eclipse-temurin-21 AS builder
WORKDIR /app

# Copiar os arquivos do projeto
COPY pom.xml .
COPY src ./src

# --mount=type=cache,target=/root/.m2 diz ao Docker para usar um cache persistente
# para as dependências do Maven, tornando builds futuros muito mais rápidos.
RUN --mount=type=cache,target=/root/.m2 mvn clean package -DskipTests


# ---- ESTÁGIO 2: Runtime ----
FROM bellsoft/liberica-runtime-container:jre-21-crac-slim-glibc
WORKDIR /app

ENV SPRING_PROFILES_ACTIVE=docker
ENV JAVA_TOOL_OPTIONS="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=*:5005"

EXPOSE 8080 5005

# Copia apenas o artefato final do estágio de build
COPY --from=builder /app/target/avaliaif-backend-0.0.1-SNAPSHOT.jar avaliaif-api.jar

ENTRYPOINT ["java", "-jar", "avaliaif-api.jar"]