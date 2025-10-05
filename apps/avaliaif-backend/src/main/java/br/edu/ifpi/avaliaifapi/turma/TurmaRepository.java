package br.edu.ifpi.avaliaifapi.turma;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repositório para a entidade Turma.
 *
 * @author Joniel Mendes
 */
public interface TurmaRepository extends JpaRepository<Turma, Long> {
}