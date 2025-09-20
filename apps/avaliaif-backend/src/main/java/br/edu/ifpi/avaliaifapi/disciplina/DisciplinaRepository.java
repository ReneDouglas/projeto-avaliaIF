package br.edu.ifpi.avaliaifapi.disciplina;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repositório para a entidade Disciplina.
 *
 * @author Renê Morais
 */
public interface DisciplinaRepository extends JpaRepository<Disciplina, Long> {
}
