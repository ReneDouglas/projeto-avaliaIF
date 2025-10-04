package br.edu.ifpi.avaliaifapi.disciplina;

import br.edu.ifpi.avaliaifapi.disciplina.dtos.DisciplinaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * Mapper interface for converting between Disciplina entity and DTO objects.
 */
@Mapper(componentModel = "spring")
public interface DisciplinaMapper {

  /**
   * Converts a Disciplina entity to a DisciplinaDTO.
   *
   * @param disciplina the Disciplina entity to convert
   * @return the converted DisciplinaDTO
   */
  DisciplinaDTO toDto(Disciplina disciplina);

  /**
   * Converts a DisciplinaDTO to a Disciplina entity.
   *
   * @param disciplinaDto the DisciplinaDTO to convert
   * @return the converted Disciplina entity
   */
  @Mapping(target = "criadoEm", ignore = true)
  @Mapping(target = "criadoPor", ignore = true)
  @Mapping(target = "atualizadoEm", ignore = true)
  @Mapping(target = "atualizadoPor", ignore = true)
  Disciplina fromDto(DisciplinaDTO disciplinaDto);

}
