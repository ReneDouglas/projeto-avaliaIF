package br.edu.ifpi.avaliaifapi.minuta;

import br.edu.ifpi.shared.enums.Eixos;
import br.edu.ifpi.shared.enums.Semestres;
import br.edu.ifpi.shared.enums.StatusMinuta;
import br.edu.ifpi.shared.enums.TiposDisciplina;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Representa a entidade Minuta no sistema.
 *
 * @author luisthedevmagician
 */

@Entity
@Table(name = "minutas")
public class Minuta {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true)
  private String publicId;

  private String titulo;

  private String conteudo;

  // faltou este
  @Enumerated(EnumType.STRING)
  private Semestres semestre;

  // faltou este
  @Enumerated(EnumType.STRING)
  private TiposDisciplina tipoDisciplina;

  // faltou este
  @Enumerated(EnumType.STRING)
  private Eixos eixo;

  @Enumerated(EnumType.STRING)
  private StatusMinuta status;

  @Column(name = "responsavel_id", nullable = false)
  private Long responsavelId;

  /**
   * Construtor padrão da classe Minuta.
   */

  public Minuta() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getPublicId() {
    return publicId;
  }

  public void setPublicId(String publicId) {
    this.publicId = publicId;
  }

  public String getTitulo() {
    return titulo;
  }

  public void setTitulo(String titulo) {
    this.titulo = titulo;
  }

  public String getConteudo() {
    return conteudo;
  }

  public void setConteudo(String conteudo) {
    this.conteudo = conteudo;
  }

  public Semestres getSemestre() {
    return semestre;
  }

  public void setSemestre(Semestres semestre) {
    this.semestre = semestre;
  }

  public TiposDisciplina getTipoDisciplina() {
    return tipoDisciplina;
  }

  public void setTipoDisciplina(TiposDisciplina tipoDisciplina) {
    this.tipoDisciplina = tipoDisciplina;
  }

  public Eixos getEixo() {
    return eixo;
  }

  public void setEixo(Eixos eixo) {
    this.eixo = eixo;
  }

  public StatusMinuta getStatus() {
    return status;
  }

  public void setStatus(StatusMinuta status) {
    this.status = status;
  }

  public Long getResponsavelId() {
    return responsavelId;
  }

  public void setResponsavelId(Long responsavelId) {
    this.responsavelId = responsavelId;
  }
}
