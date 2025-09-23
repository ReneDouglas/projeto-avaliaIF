package br.edu.ifpi.avaliaifapi.avaliacao;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * Classe que representa uma avaliação.
 *
 * @author Jhonatas G. Ribeiro
 */

 @Entity
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

    @CreatedBy
    private LocalDateTime criado_em;

    private String criado_por;

    @LastModifiedDate
    private LocalDateTime atualizado_em;
    
    private String atualizado_por;


    Avaliacao() {
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
    public LocalDateTime getCriado_em() {
        return criado_em;
    }
    public void setCriado_em(LocalDateTime criado_em) {
        this.criado_em = criado_em;
    }
    public String getCriado_por() {
        return criado_por;
    }
    public void setCriado_por(String criado_por) {
        this.criado_por = criado_por;
    }  
    public LocalDateTime getAtualizado_em() {
        return atualizado_em;
    }
    public void setAtualizado_em(LocalDateTime atualizado_em) {
        this.atualizado_em = atualizado_em;
    }
    public String getAtualizado_por() {
        return atualizado_por;
    }
    public void setAtualizado_por(String atualizado_por) {
        this.atualizado_por = atualizado_por;
    }

}
