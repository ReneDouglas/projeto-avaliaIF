import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Stack,
  Button,
  ButtonGroup,
} from '@mui/material';
import { FiltrosAvaliacao } from '../components/FiltrosAvaliacao';
import { MinutaCard } from '../components/MinutaCard';
import type { Minuta } from '../components/MinutaCard';

// ----- SIMULAÇÃO DE BACKEND (INÍCIO) -----
const mockDatabase: Minuta[] = [
  {
    id: 1,
    disciplina: 'História da Arte',
    professor: 'Carlos Andrade',
    eixo: 'Propedêutica',
    curso: 'Ensino Médio Integrado',
    turma: '2º ano C',
    tipoDisciplina: 'Propedêutica',
    dataEnvio: '26/09/2025',
    status: 'Revisão Pedagógica',
    observacoes: 'Imprimir 35 cópias em papel timbrado. Entregar na sala C-12.',
  },
  {
    id: 2,
    disciplina: 'Programação Web',
    professor: 'João Silva',
    eixo: 'Informática',
    curso: 'Técnico em Informática',
    turma: '2º ano A',
    tipoDisciplina: 'Técnica',
    dataEnvio: '14/01/2024',
    status: 'Revisão Coordenação',
    observacoes: 'Imprimir 35 cópias em papel timbrado. Entregar na sala C-12.',
  },
  {
    id: 3,
    disciplina: 'Banco de Dados',
    professor: 'Maria Santos',
    eixo: 'Informática',
    curso: 'Técnico em Informática',
    turma: '3º ano B',
    tipoDisciplina: 'Técnica',
    dataEnvio: '13/01/2024',
    status: 'Minutas Devolvidas',
    historico: [
      {
        setor: 'Coordenação',
        servidor: 'Dr. Ricardo Neves',
        dataHora: '14/01/2024, 10:30:00',
        motivo: 'Faltam detalhes sobre o SGBD utilizado.',
      },
    ],
  },
  {
    id: 4,
    disciplina: 'Química Orgânica',
    professor: 'Laura Mendes',
    eixo: 'Propedêutica',
    curso: 'Ensino Médio Integrado',
    turma: '1º ano A',
    tipoDisciplina: 'Propedêutica',
    dataEnvio: '20/09/2025',
    status: 'Revisão Coordenação',
    observacoes: 'Imprimir 35 cópias em papel timbrado. Entregar na sala C-12.',
  },
  {
    id: 5,
    disciplina: 'Educação Física',
    professor: 'Marcos Rocha',
    eixo: 'Propedêutica',
    curso: 'Ensino Médio Integrado',
    turma: '1º ano B',
    tipoDisciplina: 'Propedêutica',
    dataEnvio: '',
    status: 'Minutas Não Enviadas',
    observacoes: 'Imprimir 35 cópias em papel timbrado. Entregar na sala C-12.',
  },
  {
    id: 6,
    disciplina: 'História da Arte',
    professor: 'Carlos Andrade',
    eixo: 'Propedêutica',
    curso: 'Ensino Médio Integrado',
    turma: '2º ano C',
    tipoDisciplina: 'Propedêutica',
    dataEnvio: '26/09/2025',
    status: 'Revisão Pedagógica',
    observacoes: 'Imprimir 35 cópias em papel timbrado. Entregar na sala C-12.',
  },
  {
    id: 7,
    disciplina: 'Programação Web',
    professor: 'João Silva',
    eixo: 'Informática',
    curso: 'Técnico em Informática',
    turma: '2º ano A',
    tipoDisciplina: 'Técnica',
    dataEnvio: '14/01/2024',
    status: 'Revisão Coordenação',
    observacoes:
      'Atenção: A primeira página deve ser impressa em modo paisagem.',
  },
];

type Perfil = 'pedagogico' | 'coordenacao';

export function AvaliarMinutas() {
  const [perfilAtual, setPerfilAtual] = useState<Perfil>('pedagogico');
  const [minutasDB, setMinutasDB] = useState(mockDatabase);

  const [filtros, setFiltros] = useState({
    status: '',
    eixo: '',
    turma: '',
    ano: '',
    tipo: '',
  });

  const handleFiltroChange = (filtro: string, valor: string) => {
    setFiltros((filtrosAtuais) => ({
      ...filtrosAtuais,
      [filtro]: valor,
    }));
  };

  const handleAprovar = (minutaId: number) => {
    setMinutasDB((minutasAtuais) =>
      minutasAtuais.map((m) => {
        if (m.id === minutaId) {
          if (perfilAtual === 'coordenacao') {
            alert(
              'Minuta APROVADA pela Coordenação. Encaminhando para Setor Pedagógico.',
            );
            return { ...m, status: 'Revisão Pedagógica' };
          }
          if (perfilAtual === 'pedagogico') {
            alert(
              'Minuta APROVADA pelo Setor Pedagógico. Processo finalizado!',
            );
            return { ...m, status: 'Minutas Finalizadas' };
          }
        }
        return m;
      }),
    );
  };

  const handleRejeitar = (minutaId: number, motivo: string) => {
    if (motivo) {
      setMinutasDB((minutasAtuais) =>
        minutasAtuais.map((m) => {
          if (m.id === minutaId) {
            return {
              ...m,
              status: 'Minutas Devolvidas',
              historico: [
                ...(m.historico || []),
                {
                  setor:
                    perfilAtual === 'coordenacao'
                      ? 'Coordenação'
                      : 'Setor Pedagógico',
                  servidor: 'Usuário Logado',
                  dataHora: new Date().toLocaleString('pt-BR'),
                  motivo: motivo,
                },
              ],
            };
          }
          return m;
        }),
      );
    }
  };

  const minutasParaExibir = minutasDB
    .filter((minuta) => {
      if (perfilAtual === 'pedagogico')
        return (
          minuta.status === 'Revisão Pedagógica' ||
          minuta.status === 'Minutas Devolvidas' ||
          minuta.status === 'Minutas Finalizadas' ||
          minuta.status === 'Minutas Não Enviadas' ||
          minuta.status === 'Minutas Devolvidas' ||
          minuta.status === 'Revisão Coordenação'
        );
      if (perfilAtual === 'coordenacao')
        return (
          minuta.status === 'Revisão Coordenação' ||
          minuta.status === 'Revisão Pedagógica' ||
          minuta.status === 'Minutas Devolvidas' ||
          minuta.status === 'Minutas Finalizadas' ||
          minuta.status === 'Minutas Não Enviadas'
        );
      return false;
    })
    .filter((minuta) => {
      return (
        (filtros.status ? minuta.status === filtros.status : true) &&
        (filtros.eixo ? minuta.eixo === filtros.eixo : true) &&
        (filtros.turma ? minuta.turma === filtros.turma : true) &&
        (filtros.ano ? minuta.dataEnvio.includes(filtros.ano) : true) &&
        (filtros.tipo ? minuta.tipoDisciplina === filtros.tipo : true)
      );
    });
  // ----- SIMULAÇÃO DE BACKEND (FIM) -----

  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 2, p: 1, border: '1px dashed grey', borderRadius: 1 }}>
        <Typography variant='body2' sx={{ mb: 1 }}>
          Simulador de Perfil:
        </Typography>
        <ButtonGroup variant='outlined' size='small'>
          <Button
            variant={perfilAtual === 'pedagogico' ? 'contained' : 'outlined'}
            onClick={() => setPerfilAtual('pedagogico')}
          >
            Setor Pedagógico
          </Button>
          <Button
            variant={perfilAtual === 'coordenacao' ? 'contained' : 'outlined'}
            onClick={() => setPerfilAtual('coordenacao')}
          >
            Coordenação
          </Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant='h4' component='h1' gutterBottom>
          Avaliar Minutas
        </Typography>
        <Typography variant='subtitle1' color='text.secondary' gutterBottom>
          Análise e avaliação das minutas enviadas pelos professores
        </Typography>
        <Stack spacing={3} sx={{ mt: 3 }}>
          <FiltrosAvaliacao
            filtros={filtros}
            onFiltroChange={handleFiltroChange}
          />
          <Box>
            {minutasParaExibir.length > 0 ? (
              minutasParaExibir.map((minuta) => (
                <MinutaCard
                  key={minuta.id}
                  minuta={minuta}
                  onAprovar={handleAprovar}
                  onRejeitar={handleRejeitar}
                  perfilUsuario={perfilAtual}
                />
              ))
            ) : (
              <Typography sx={{ mt: 3, textAlign: 'center' }}>
                Nenhuma minuta encontrada com os filtros selecionados.
              </Typography>
            )}
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
