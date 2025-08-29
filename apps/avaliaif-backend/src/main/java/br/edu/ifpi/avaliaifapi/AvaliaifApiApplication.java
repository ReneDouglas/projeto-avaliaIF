package br.edu.ifpi.avaliaifapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Classe principal da Api do AvaliaIF.
 */
@SpringBootApplication
public class AvaliaifApiApplication {
  /**
   * Método principal que inicia a aplicação Spring Boot.
   *
   * @param args argumentos da linha de comando para inicialização da aplicação
   */
  public static void main(String[] args) {
    SpringApplication.run(AvaliaifApiApplication.class, args);
  }
}
