package br.edu.ifpi.avaliaifapi.disciplina;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador responsável por gerenciar as operações relacionadas às
 * disciplinas.
 */
@RestController
@RequestMapping("/api/v1/disciplinas")
public class DisciplinaController {

  private final DisciplinaService disciplinaService;

  /**
   * Construtor da classe DisciplinaController.
   *
   * @param disciplinaService serviço que gerencia as operações de disciplina
   */
  public DisciplinaController(DisciplinaService disciplinaService) {
    this.disciplinaService = disciplinaService;
  }

  /**
   * Lista todas as disciplinas cadastradas no sistema.
   *
   * @return ResponseEntity contendo a lista de disciplinas
   */
  @GetMapping
  public ResponseEntity<List<Disciplina>> listarDisciplinas() {
    List<Disciplina> disciplinas = List.of();
    return ResponseEntity.ok().body(disciplinas);
  }

}
