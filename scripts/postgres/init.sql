-- ================================
-- ENUMS
-- ================================

-- Funções
CREATE TYPE funcao_enum AS ENUM (
	'administrador',
	'professor',
	'coordenador',
	'setor_pedagogico',
	'setor_logistica'
);

-- Status das minutas
CREATE TYPE status_minuta_enum AS ENUM (
	'nao_enviada',
	'revisao_coordenacao',
	'revisao_pedagogia',
	'devolvida',
	'finalizada',
	'impressa'
);

-- Eixos das disciplinas
CREATE TYPE eixo_enum AS ENUM (
	'administracao',
	'agropecuaria',
	'informatica',
	'meio_ambiente'
);

-- Tipo de disciplina
CREATE TYPE tipo_disciplina_enum AS ENUM (
	'tecnico',
	'propedeutica'
);

-- ================================
-- TABELAS
-- ================================

-- Servidores
CREATE TABLE servidores (
	id BIGSERIAL PRIMARY KEY,
	public_id TEXT NOT NULL UNIQUE,
	nome TEXT NOT NULL,
	matricula TEXT NOT NULL UNIQUE,
	email_institucional TEXT UNIQUE,
	criado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	criado_por TEXT NOT NULL,
	atualizado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	atualizado_por TEXT NOT NULL
);

-- Usuários
CREATE TABLE usuarios (
	id BIGSERIAL PRIMARY KEY,
	public_id TEXT NOT NULL UNIQUE,
	nome TEXT NOT NULL,
	email TEXT NOT NULL UNIQUE,
	senha_hash TEXT NOT NULL,
	servidor_id BIGINT NOT NULL,
	criado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	criado_por TEXT NOT NULL,
	atualizado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	atualizado_por TEXT NOT NULL,
	CONSTRAINT fk_usuario_servidor FOREIGN KEY (servidor_id)
		REFERENCES servidores (id) ON DELETE RESTRICT
);

-- Funções (Roles)
CREATE TABLE funcoes (
	id BIGSERIAL PRIMARY KEY,
	public_id TEXT NOT NULL UNIQUE,
	nome funcao_enum NOT NULL,
	criado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	criado_por TEXT NOT NULL,
	atualizado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	atualizado_por TEXT NOT NULL
);

-- Associação Usuário-Função (N:N)
CREATE TABLE usuarios_funcoes (
	usuario_id BIGINT NOT NULL,
	funcao_id BIGINT NOT NULL,
	criado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	criado_por TEXT NOT NULL,
	atualizado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	atualizado_por TEXT NOT NULL,
	PRIMARY KEY (usuario_id, funcao_id),
	CONSTRAINT fk_uf_usuario FOREIGN KEY (usuario_id)
		REFERENCES usuarios (id) ON DELETE CASCADE,
	CONSTRAINT fk_uf_funcao FOREIGN KEY (funcao_id)
		REFERENCES funcoes (id) ON DELETE CASCADE
);

-- Disciplinas
CREATE TABLE disciplinas (
	id BIGSERIAL PRIMARY KEY,
	public_id TEXT NOT NULL UNIQUE,
	nome TEXT NOT NULL,
	descricao TEXT,
	tipo_disciplina tipo_disciplina_enum NOT NULL,
	eixo eixo_enum NOT NULL,
	professor_id BIGINT NOT NULL,
	criado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	criado_por TEXT NOT NULL,
	atualizado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	atualizado_por TEXT NOT NULL,
	CONSTRAINT fk_disciplina_professor FOREIGN KEY (professor_id)
		REFERENCES usuarios (id) ON DELETE RESTRICT
);

-- Turmas
CREATE TABLE turmas (
	id BIGSERIAL PRIMARY KEY,
	public_id TEXT NOT NULL UNIQUE,
	nome TEXT NOT NULL,
	ano SMALLINT NOT NULL,
	periodo TEXT,
	criado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	criado_por TEXT NOT NULL,
	atualizado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	atualizado_por TEXT NOT NULL
);

-- Associação Turma-Disciplina (N:N)
CREATE TABLE turmas_disciplinas (
	turma_id BIGINT NOT NULL,
	disciplina_id BIGINT NOT NULL,
	criado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	criado_por TEXT NOT NULL,
	atualizado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	atualizado_por TEXT NOT NULL,
	PRIMARY KEY (turma_id, disciplina_id),
	CONSTRAINT fk_td_turma FOREIGN KEY (turma_id)
		REFERENCES turmas (id) ON DELETE CASCADE,
	CONSTRAINT fk_td_disciplina FOREIGN KEY (disciplina_id)
		REFERENCES disciplinas (id) ON DELETE CASCADE
);

-- Minutas
CREATE TABLE minutas (
	id BIGSERIAL PRIMARY KEY,
	public_id TEXT NOT NULL UNIQUE,
	titulo TEXT NOT NULL,
	conteudo TEXT NOT NULL,
	status status_minuta_enum NOT NULL,
	responsavel_id BIGINT NOT NULL,
	criado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	criado_por TEXT NOT NULL,
	atualizado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	atualizado_por TEXT NOT NULL,
	CONSTRAINT fk_minuta_responsavel FOREIGN KEY (responsavel_id)
		REFERENCES servidores (id) ON DELETE RESTRICT
);

-- Histórico de Indeferimentos das Minutas
CREATE TABLE avaliacoes (
	id BIGSERIAL PRIMARY KEY,
	public_id TEXT NOT NULL UNIQUE,
	minuta_id BIGINT NOT NULL,
	avaliador_id BIGINT NOT NULL,
	requerente_id BIGINT NOT NULL,
	motivo TEXT NOT NULL,
	criado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	criado_por TEXT NOT NULL,
	atualizado_em TIMESTAMP NOT NULL DEFAULT NOW(),
	atualizado_por TEXT NOT NULL,
	CONSTRAINT fk_hi_minuta FOREIGN KEY (minuta_id)
		REFERENCES minutas (id) ON DELETE CASCADE,
	CONSTRAINT fk_hi_avaliador FOREIGN KEY (avaliador_id)
		REFERENCES usuarios (id) ON DELETE RESTRICT,
	CONSTRAINT fk_hi_requerente FOREIGN KEY (requerente_id)
		REFERENCES usuarios (id) ON DELETE RESTRICT
);