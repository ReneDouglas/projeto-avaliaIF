import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import HistoryIcon from '@mui/icons-material/History';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'; // NOVO ÍCONE

type HistoricoItem = {
  setor: string;
  servidor: string;
  dataHora: string;
  motivo: string;
};
export type Minuta = {
  id: number;
  disciplina: string;
  professor: string;
  eixo: string;
  curso: string;
  turma: string;
  tipoDisciplina: string;
  dataEnvio: string;
  status: string;
  historico?: HistoricoItem[];
  observacoes?: string;
};

type ChipColor =
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'default'
  | 'primary';

const statusConfig: { [key: string]: { label: string; color: ChipColor } } = {
  'Revisão Pedagógica': { label: 'Revisão Pedagógica', color: 'info' },
  'Revisão Coordenação': { label: 'Revisão Coordenação', color: 'primary' },
  'Minutas Não Enviadas': { label: 'Minutas Não Enviadas', color: 'error' },
  'Minutas Devolvidas': { label: 'Minutas Devolvidas', color: 'warning' },
  'Minutas Finalizadas': { label: 'Minutas Finalizadas', color: 'success' },
};

type MinutaCardProps = {
  minuta: Minuta;
  perfilUsuario: 'pedagogico' | 'coordenacao';
  onAprovar: (id: number) => void;
  onRejeitar: (id: number, motivo: string) => void;
};

export function MinutaCard({
  minuta,
  perfilUsuario,
  onAprovar,
  onRejeitar,
}: MinutaCardProps) {
  const [rejeitarModalAberto, setRejeitarModalAberto] = useState(false);
  const [motivo, setMotivo] = useState('');

  const [obsModalAberto, setObsModalAberto] = useState(false);

  const currentStatus = statusConfig[minuta.status] || {
    label: minuta.status,
    color: 'default',
  };

  const isParaAnalise =
    (perfilUsuario === 'pedagogico' &&
      minuta.status === 'Revisão Pedagógica') ||
    (perfilUsuario === 'coordenacao' &&
      minuta.status === 'Revisão Coordenação');
  const isDevolvida = minuta.status === 'Minutas Devolvidas';
  const isFinalizada = minuta.status === 'Minutas Finalizadas';

  const podeVerObservacoes =
    minuta.status === 'Revisão Coordenação' ||
    minuta.status === 'Revisão Pedagógica' ||
    minuta.status === 'Minutas Finalizadas';

  const handleAbrirModalRejeicao = () => {
    setMotivo('');
    setRejeitarModalAberto(true);
  };
  const handleFecharModalRejeicao = () => {
    setRejeitarModalAberto(false);
  };
  const handleEnviarRejeicao = () => {
    if (motivo.trim()) {
      onRejeitar(minuta.id, motivo);
      handleFecharModalRejeicao();
    } else {
      alert('Por favor, preencha o motivo da rejeição.');
    }
  };

  return (
    <>
      <Card elevation={2} sx={{ borderRadius: 3, mb: 2 }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography variant='h6' component='div'>
              {minuta.disciplina}
            </Typography>
            <Chip
              label={currentStatus.label}
              color={currentStatus.color}
              size='small'
            />
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2, gap: 2 }}>
            <Box
              sx={{
                width: {
                  xs: 'calc(100% - 16px)',
                  sm: 'calc(50% - 8px)',
                  md: 'calc(33.3% - 11px)',
                  lg: 'calc(16.6% - 14px)',
                },
              }}
            >
              <Typography variant='body2'>
                <strong>Professor:</strong> {minuta.professor}
              </Typography>
            </Box>
            <Box
              sx={{
                width: {
                  xs: 'calc(100% - 16px)',
                  sm: 'calc(50% - 8px)',
                  md: 'calc(33.3% - 11px)',
                  lg: 'calc(16.6% - 14px)',
                },
              }}
            >
              <Typography variant='body2'>
                <strong>Eixo:</strong> {minuta.eixo}
              </Typography>
            </Box>
            <Box
              sx={{
                width: {
                  xs: 'calc(100% - 16px)',
                  sm: 'calc(50% - 8px)',
                  md: 'calc(33.3% - 11px)',
                  lg: 'calc(16.6% - 14px)',
                },
              }}
            >
              <Typography variant='body2'>
                <strong>Curso:</strong> {minuta.curso}
              </Typography>
            </Box>
            <Box
              sx={{
                width: {
                  xs: 'calc(100% - 16px)',
                  sm: 'calc(50% - 8px)',
                  md: 'calc(33.3% - 11px)',
                  lg: 'calc(16.6% - 14px)',
                },
              }}
            >
              <Typography variant='body2'>
                <strong>Turma:</strong> {minuta.turma}
              </Typography>
            </Box>
            <Box
              sx={{
                width: {
                  xs: 'calc(100% - 16px)',
                  sm: 'calc(50% - 8px)',
                  md: 'calc(33.3% - 11px)',
                  lg: 'calc(16.6% - 14px)',
                },
              }}
            >
              <Typography variant='body2'>
                <strong>Tipo:</strong> {minuta.tipoDisciplina}
              </Typography>
            </Box>
            <Box
              sx={{
                width: {
                  xs: 'calc(100% - 16px)',
                  sm: 'calc(50% - 8px)',
                  md: 'calc(33.3% - 11px)',
                  lg: 'calc(16.6% - 14px)',
                },
              }}
            >
              <Typography variant='body2'>
                <strong>Data de Envio:</strong> {minuta.dataEnvio}
              </Typography>
            </Box>
          </Box>

          {isDevolvida && minuta.historico && minuta.historico.length > 0 && (
            <Box
              sx={{
                border: '1px solid',
                borderColor: 'warning.main',
                borderRadius: 2,
                p: 2,
                mt: 3,
                backgroundColor: 'warning.light',
              }}
            >
              <Typography
                variant='subtitle1'
                sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
              >
                <HistoryIcon sx={{ mr: 1 }} fontSize='small' /> Histórico de
                Indeferimentos
              </Typography>
              {minuta.historico.map((item, index) => (
                <Box key={index} sx={{ mb: 1 }}>
                  <Typography variant='body2'>
                    <strong>Minuta:</strong>{' '}
                    <a href='#'>/minutas/banco-dados-v1.pdf</a>
                  </Typography>
                  <Typography variant='body2'>
                    <strong>Setor:</strong> {item.setor} |{' '}
                    <strong>Servidor:</strong> {item.servidor} |{' '}
                    <strong>Data/Hora:</strong> {item.dataHora}
                  </Typography>
                  <Typography variant='body2'>
                    <strong>Motivo:</strong> {item.motivo}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}

          <Stack direction='row' spacing={1} sx={{ mt: 3 }}>
            <Button
              variant='outlined'
              size='small'
              startIcon={<VisibilityIcon />}
              sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
              onClick={() => alert('Simulando abertura do PDF...')}
            >
              Visualizar
            </Button>

            {minuta.observacoes && podeVerObservacoes && (
              <Button
                variant='outlined'
                size='small'
                startIcon={<InfoOutlinedIcon />}
                sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
                onClick={() => setObsModalAberto(true)}
              >
                Ver Observações
              </Button>
            )}

            {!isFinalizada && (
              <>
                <Button
                  variant='outlined'
                  size='small'
                  startIcon={<EmailIcon />}
                  sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
                  onClick={() =>
                    alert(`Email enviado para ${minuta.professor}!`)
                  }
                >
                  Notificar por e-mail
                </Button>
                {isParaAnalise && (
                  <>
                    <Button
                      variant='contained'
                      color='success'
                      size='small'
                      startIcon={<CheckCircleOutlineIcon />}
                      onClick={() => onAprovar(minuta.id)}
                    >
                      Aprovar
                    </Button>
                    <Button
                      variant='contained'
                      color='error'
                      size='small'
                      startIcon={<HighlightOffIcon />}
                      onClick={handleAbrirModalRejeicao}
                    >
                      Rejeitar
                    </Button>
                  </>
                )}
              </>
            )}
          </Stack>
        </CardContent>
      </Card>

      <Dialog open={rejeitarModalAberto} onClose={handleFecharModalRejeicao}>
        <DialogTitle>Rejeitar Minuta</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor, descreva o motivo para a devolução da minuta ao
            professor. Esta informação ficará visível no histórico.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin='dense'
            id='motivo'
            label='Motivo da Rejeição'
            type='text'
            fullWidth
            variant='standard'
            multiline
            rows={3}
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFecharModalRejeicao}>Cancelar</Button>
          <Button
            onClick={handleEnviarRejeicao}
            variant='contained'
            color='error'
          >
            Enviar Rejeição
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={obsModalAberto} onClose={() => setObsModalAberto(false)}>
        <DialogTitle>Observações do Professor para Impressão</DialogTitle>
        <DialogContent>
          <Typography variant='body1' sx={{ mt: 1 }}>
            {minuta.observacoes}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setObsModalAberto(false)} variant='contained'>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
