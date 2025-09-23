package br.edu.ifpi.avaliaifapi.servidor;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Classe que representa um servidor.
 *
 * @author Jhonatas G. Ribeiro
 */

@Entity
@Table(name = "servidores")
public class Servidor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String publicId;

    private String nome;
    private String matricula;
    private String email_institucional;
    
    @CreatedDate
    private String criado_em;
    private String criado_por;

    @LastModifiedDate
    private String atualizado_em;
    private String atualizado_por;

    Servidor() {
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
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getMatricula() {
        return matricula;
    }
    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }
    public String getEmail_institucional() {
        return email_institucional;
    }
    public void setEmail_institucional(String email_institucional) {
        this.email_institucional = email_institucional;
    }
    public String getCriado_em() {
        return criado_em;
    }
    public void setCriado_em(String criado_em) {
        this.criado_em = criado_em;
    }
    public String getCriado_por() {
        return criado_por;
    }
    public void setCriado_por(String criado_por) {
        this.criado_por = criado_por;
    }
    public String getAtualizado_em() {
        return atualizado_em;
    }
    public void setAtualizado_em(String atualizado_em) {
        this.atualizado_em = atualizado_em;
    }
    public String getAtualizado_por() {
        return atualizado_por;
    }
    public void setAtualizado_por(String atualizado_por) {
        this.atualizado_por = atualizado_por;
    }

}
