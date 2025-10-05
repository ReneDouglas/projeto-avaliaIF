package br.edu.ifpi.avaliaifapi.turma;

import br.edu.ifpi.shared.enums.Semestres;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Representa a entidade Turma no sistema.
 *
 * @author Joniel Mendes
 */

@Entity
@Table(name = "turmas")
public class Turma {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String publicId;

    private String nome;

    @Enumerated(EnumType.STRING)
    private Semestres semestre;

    public Turma() {
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
}