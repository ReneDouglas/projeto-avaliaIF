package br.edu.ifpi.avaliaifapi.disciplina.dtos;

public record DisciplinaDTO(String publicId, String nome, String descricao, String semestre,
    String tipo) {


  public static Builder builder() {
    return new Builder();
  }

  public static class Builder {
    private String publicId;
    private String nome;
    private String descricao;
    private String semestre;
    private String tipo;

    private Builder() {}

    public Builder publicId(String publicId) {
      this.publicId = publicId;
      return this;
    }

    public Builder nome(String nome) {
      this.nome = nome;
      return this;
    }

    public Builder descricao(String descricao) {
      this.descricao = descricao;
      return this;
    }

    public Builder semestre(String semestre) {
      this.semestre = semestre;
      return this;
    }

    public Builder tipo(String tipo) {
      this.tipo = tipo;
      return this;
    }

    public DisciplinaDTO build() {
      return new DisciplinaDTO(publicId, nome, descricao, semestre, tipo);
    }
  }
}
