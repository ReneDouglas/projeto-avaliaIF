CREATE TYPE bimestre_enum AS ENUM (
    '1',
    '2',
    '3',
    '4'
);

CREATE TYPE semestre_enum AS ENUM (
    '1',
    '2'
);

ALTER TABLE minutas ADD COLUMN bimestre bimestre_enum NOT NULL;
ALTER TABLE minutas ADD COLUMN semestre semestre_enum NOT NULL;

ALTER TABLE disciplinas ADD COLUMN semestre semestre_enum NOT NULL;