import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { Heading } from './components/Heading';
import { green } from '@mui/material/colors';

export function App() {
  return (
    // CssBaseline normaliza os estilos do navegador, uma boa prática com MUI.
    <>
      <CssBaseline />
      {/* Box é um componente genérico para layout, similar a uma <div>. */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          bgcolor: green[100], // Cores do sistema de design do MUI.
        }}
      >
        <Heading>AvaliaIF</Heading>

        {/* Container centraliza o conteúdo e define uma largura máxima. */}
        <Container
          component='main'
          sx={{
            flexGrow: 1, // Faz o container ocupar o espaço restante.
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            py: 4, // Padding vertical.
          }}
        >
          <Typography
            variant='h2'
            component='h2'
            fontWeight='fontWeightBold'
            color='primary' // Cor de texto principal do tema.
          >
            Bem-vindo!
          </Typography>
          <Typography
            variant='h5'
            color='secondary' // Cor de texto secundária.
            sx={{ mt: 2 }} // Margem no topo, 'mt: 2' é 16px por padrão.
          >
            Este é o corpo principal do AvaliaIF
          </Typography>
        </Container>
      </Box>
    </>
  );
}
