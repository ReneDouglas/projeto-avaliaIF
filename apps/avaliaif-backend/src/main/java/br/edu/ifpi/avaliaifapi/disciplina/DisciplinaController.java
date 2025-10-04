package br.edu.ifpi.avaliaifapi.disciplina;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.edu.ifpi.avaliaifapi.disciplina.dtos.DisciplinaDTO;
import br.edu.ifpi.avaliaifapi.shared.exceptions.DisciplinaNotFoundException;

/**
 * Controlador responsável por gerenciar as operações relacionadas às disciplinas.
 */
@RestController
@RequestMapping("/api/v1/disciplinas")
public class DisciplinaController {

  private final DisciplinaService disciplinaService;
  private final DisciplinaMapper disciplinaMapper;

  /**
   * Construtor da classe DisciplinaController.
   *
   * @param disciplinaService serviço que gerencia as operações de disciplina
   * @param disciplinaMapper mapeador para conversão entre entidades e DTOs
   */
  public DisciplinaController(DisciplinaService disciplinaService,
      DisciplinaMapper disciplinaMapper) {
    this.disciplinaService = disciplinaService;
    this.disciplinaMapper = disciplinaMapper;
  }

  /**
   * Lista todas as disciplinas cadastradas no sistema.
   *
   * @return ResponseEntity contendo a lista de disciplinas
   */
  @GetMapping
  public ResponseEntity<List<DisciplinaDTO>> listarDisciplinas() {
    List<Disciplina> disciplinas = List.of();

    Disciplina disciplina = new Disciplina();
    disciplina.setPublicId("abc123");
    disciplina.setNome("Matemática");
    disciplina.setDescricao("Disciplina de Matemática");
    disciplina.setSemestre(null);
    disciplina.setTipo(null);


    disciplinaService.metodoExemplo();
    // if (disciplinas.isEmpty()) {
    // return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(List.of());
    // }



    return ResponseEntity.ok().body(List.of(disciplinaMapper.toDto(disciplina)));
  }

}
