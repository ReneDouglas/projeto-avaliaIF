# ---- ESTÁGIO 1 ----
FROM maven:3.9-eclipse-temurin-21 AS builder

WORKDIR /app

COPY pom.xml .

#RUN --mount=type=cache,target=/root/.m2 mvn dependency:go-offline

COPY src ./src

RUN --mount=type=cache,id=m2-cache,target=/root/.m2 mvn clean package -DskipTests


# ---- ESTÁGIO 2: Runtime Otimizado ----
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app

ENV SPRING_PROFILES_ACTIVE=docker

EXPOSE 8080

COPY --from=builder /app/target/avaliaif-backend-0.0.1-SNAPSHOT.jar avaliaif-api.jar

ENTRYPOINT ["java", "-jar", "avaliaif-api.jar"]