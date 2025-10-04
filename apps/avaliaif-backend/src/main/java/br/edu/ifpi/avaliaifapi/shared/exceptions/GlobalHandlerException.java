package br.edu.ifpi.avaliaifapi.shared.exceptions;

import java.util.ArrayList;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalHandlerException {

  @ExceptionHandler(DisciplinaNotFoundException.class)
  public ResponseEntity<List<String>> handleDisciplinaNotFoundException(
      DisciplinaNotFoundException e) {
    List<String> errors = new ArrayList<>();
    errors.add(e.getMessage());
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errors);
  }

}
