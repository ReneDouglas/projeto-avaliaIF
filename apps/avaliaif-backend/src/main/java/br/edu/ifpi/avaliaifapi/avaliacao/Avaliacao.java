package br.edu.ifpi.avaliaifapi.avaliacao;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Classe que representa uma avaliação.
 *
 * @author Jhonatas G. Ribeiro
 */

@Entity
@Table(name = "avaliacoes")
public class Avaliacao {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true)
  private String publicId;

  // private Minuta minuta_id;
  // private Usuario avaliador_id;
  // private Usuario requerente_id;
  // private Disciplina disciplina_id;

  private LocalDateTime criadoEm;
  private String criadoPor;

  private LocalDateTime atualizadoEm;
  private String atualizadoPor;


  public Avaliacao() {}

  public Long getId() {
    return id;
  }

  public String getPublicId() {
    return publicId;
  }

  public void setPublicId(String publicId) {
    this.publicId = publicId;
  }

  public LocalDateTime getCriadoEm() {
    return criadoEm;
  }

  public void setCriadoEm(LocalDateTime criadoEm) {
    this.criadoEm = criadoEm;
  }

  public String getCriadoPor() {
    return criadoPor;
  }

  public void setCriadoPor(String criadoPor) {
    this.criadoPor = criadoPor;
  }

  public LocalDateTime getAtualizadoEm() {
    return atualizadoEm;
  }

  public void setAtualizadoEm(LocalDateTime atualizadoEm) {
    this.atualizadoEm = atualizadoEm;
  }

  public String getAtualizadoPor() {
    return atualizadoPor;
  }

  public void setAtualizadoPor(String atualizadoPor) {
    this.atualizadoPor = atualizadoPor;
  }

}
