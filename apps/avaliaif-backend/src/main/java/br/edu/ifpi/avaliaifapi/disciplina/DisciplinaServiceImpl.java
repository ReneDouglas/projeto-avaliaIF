package br.edu.ifpi.avaliaifapi.disciplina;

import org.springframework.stereotype.Service;
import br.edu.ifpi.avaliaifapi.shared.exceptions.DisciplinaNotFoundException;

/**
 * Implementação da interface DisciplinaService.
 */
@Service
public class DisciplinaServiceImpl implements DisciplinaService {

  /**
   * Construtor padrão da classe DisciplinaServiceImpl.
   */
  public DisciplinaServiceImpl() {}

  @Override
  public void metodoExemplo() {
    throw new DisciplinaNotFoundException();
    // Implementação do método exemplo
  }

  @Override
  public void criarDisciplina(Disciplina disciplina) {
    // Implementação do método criarDisciplina
  }

}
