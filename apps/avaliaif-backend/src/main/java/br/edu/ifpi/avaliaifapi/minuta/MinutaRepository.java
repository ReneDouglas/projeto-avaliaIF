package br.edu.ifpi.avaliaifapi.minuta;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repositório para operações de acesso a dados da entidade Minuta.
 * Adicione métodos personalizados de consulta, se necessário.
 * 
 *
 * @author luisthedevmagician
 */

public interface MinutaRepository extends JpaRepository<Minuta, Long> {
}
