import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

type FiltrosProps = {
  filtros: {
    status: string;
    eixo: string;
    turma: string;
    ano: string;
    tipo: string;
  };
  onFiltroChange: (filtro: string, valor: string) => void;
};

export function FiltrosAvaliacao({ filtros, onFiltroChange }: FiltrosProps) {
  const handleChange = (event: SelectChangeEvent) => {
    // event.target.name será "status", "eixo", "turma", etc.
    // event.target.value será o valor selecionado (ex: "devolvida")
    onFiltroChange(event.target.name, event.target.value);
  };

  return (
    <Card elevation={2} sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography
          variant='h6'
          component='div'
          sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
        >
          <FilterListIcon sx={{ mr: 1 }} />
          Filtros de Busca
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <FormControl
            fullWidth
            size='small'
            sx={{ flex: 1, minWidth: '180px' }}
          >
            <InputLabel>Status</InputLabel>
            <Select
              name='status'
              value={filtros.status}
              label='Status'
              onChange={handleChange}
            >
              <MenuItem value=''>
                <em>Todos os Status</em>
              </MenuItem>
              <MenuItem value='Revisão Coordenação'>
                Revisão Coordenação
              </MenuItem>
              <MenuItem value='Revisão Pedagógica'>Revisão Pedagógica</MenuItem>
              <MenuItem value='Minutas Devolvidas'>Minutas Devolvidas</MenuItem>
              <MenuItem value='Minutas Finalizadas'>
                Minutas Finalizadas
              </MenuItem>
              <MenuItem value='Minutas Não Enviadas'>
                Minutas Não Enviadas
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            size='small'
            sx={{ flex: 1, minWidth: '180px' }}
          >
            <InputLabel>Eixo</InputLabel>
            <Select
              name='eixo'
              value={filtros.eixo}
              label='Eixo'
              onChange={handleChange}
            >
              <MenuItem value=''>
                <em>Todos os Eixos</em>
              </MenuItem>
              <MenuItem value='Informática'>Informática</MenuItem>
              <MenuItem value='Agropecuária'>Agropecuária</MenuItem>
              <MenuItem value='Propedêutica'>Propedêutica</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            size='small'
            sx={{ flex: 1, minWidth: '180px' }}
          >
            <InputLabel>Turma</InputLabel>
            <Select
              name='turma'
              value={filtros.turma}
              label='Turma'
              onChange={handleChange}
            >
              <MenuItem value=''>
                <em>Todas as Turmas</em>
              </MenuItem>
              <MenuItem value='3º ano B'>3º ano B</MenuItem>
              <MenuItem value='2º ano A'>2º ano A</MenuItem>
              <MenuItem value='2º ano C'>2º ano C</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            size='small'
            sx={{ flex: 1, minWidth: '180px' }}
          >
            <InputLabel>Ano</InputLabel>
            <Select
              name='ano'
              value={filtros.ano}
              label='Ano'
              onChange={handleChange}
            >
              <MenuItem value=''>
                <em>Todos os Anos</em>
              </MenuItem>
              <MenuItem value='2024'>2024</MenuItem>
              <MenuItem value='2025'>2025</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            size='small'
            sx={{ flex: 1, minWidth: '180px' }}
          >
            <InputLabel>Tipo de Disciplina</InputLabel>
            <Select
              name='tipo'
              value={filtros.tipo}
              label='Tipo de Disciplina'
              onChange={handleChange}
            >
              <MenuItem value=''>
                <em>Todos os Tipos</em>
              </MenuItem>
              <MenuItem value='Técnica'>Técnica</MenuItem>
              <MenuItem value='Propedêutica'>Propedêutica</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  );
}
