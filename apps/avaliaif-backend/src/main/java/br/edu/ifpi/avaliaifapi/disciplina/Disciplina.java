package br.edu.ifpi.avaliaifapi.disciplina;

import br.edu.ifpi.shared.enums.Semestres;
import br.edu.ifpi.shared.enums.TiposDisciplina;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

/**
 * Classe que representa uma disciplina.
 *
 * @author Renê Morais
 */
@Entity
@Table(name = "disciplinas")
public class Disciplina {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true)
  private String publicId;

  private String nome;

  private String descricao;

  @Enumerated(EnumType.STRING)
  private Semestres semestre;

  @Enumerated(EnumType.STRING)
  private TiposDisciplina tipo;

  private LocalDateTime criadoEm;
  private String criadoPor;
  private LocalDateTime atualizadoEm;
  private String atualizadoPor;

  Disciplina() {
  }

  public Long getId() {
    return id;
  }

  public String getPublicId() {
    return publicId;
  }

  public void setPublicId(String publicId) {
    this.publicId = publicId;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public Semestres getSemestre() {
    return semestre;
  }

  public void setSemestre(Semestres semestre) {
    this.semestre = semestre;
  }

  public TiposDisciplina getTipo() {
    return tipo;
  }

  public void setTipo(TiposDisciplina tipo) {
    this.tipo = tipo;
  }

  public String getDescricao() {
    return descricao;
  }

  public void setDescricao(String descricao) {
    this.descricao = descricao;
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
