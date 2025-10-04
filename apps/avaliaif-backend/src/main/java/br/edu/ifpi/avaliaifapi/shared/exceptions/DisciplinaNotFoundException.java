package br.edu.ifpi.avaliaifapi.shared.exceptions;

public class DisciplinaNotFoundException extends RuntimeException {

  public DisciplinaNotFoundException(String message) {
    super(message);
  }

  public DisciplinaNotFoundException() {
    super("Disciplina não encontrada");
  }

  public DisciplinaNotFoundException(String message, Throwable cause) {
    super(message, cause);
  }


}
