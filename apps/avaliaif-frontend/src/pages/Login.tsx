import { useState, useRef } from 'react';
import type { FormEvent } from 'react';
import {
  Box,
  Card,
  CardContent,
  CssBaseline,
  TextField,
  Button,
  Typography,
  Alert,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from '@mui/material';
import { avaliaIFColors, commonStyles } from '../theme';

export function Login() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Refs para controlar os inputs diretamente
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Estados do formulário - apenas para erros agora
  const [formData] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Manipular submit do formulário - lê valores das refs
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Pegar valores diretamente dos inputs
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    // Validação simples
    setEmailError('');
    setPasswordError('');
    setLoginError('');

    let hasErrors = false;

    if (!email.trim()) {
      setEmailError('E-mail é obrigatório');
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('E-mail inválido');
      hasErrors = true;
    }

    if (!password) {
      setPasswordError('Senha é obrigatória');
      hasErrors = true;
    } else if (password.length < 4) {
      setPasswordError('Senha deve ter pelo menos 4 caracteres');
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    setIsLoading(true);
    setLoginError('');

    try {
      // Simular requisição de login
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: Integrar com API de autenticação real
      // Por enquanto, simulando validação para desenvolvimento
      // NOTA: Esta lógica será substituída pela integração com o backend

      // Simulação temporária - remover quando a API estiver pronta
      const isDevelopmentLogin =
        email.includes('@ifpi.edu.br') && password.length >= 4;

      if (isDevelopmentLogin) {
        alert('Login realizado com sucesso!');
        // TODO: Implementar redirecionamento para dashboard após integração com backend
      } else {
        setLoginError('E-mail ou senha incorretos');
      }
    } catch {
      setLoginError('Erro interno. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  // Seção institucional
  const InstitutionalSection = () => (
    <Box
      sx={{
        ...commonStyles.institutionalSection,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: isMobile ? 'auto' : '100vh',
      }}
    >
      {/* Logos AvaliaIF e IFPI */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? 3 : 4,
          mb: 4,
        }}
      >
        {/* Logo do AvaliaIF */}
        <Box
          component='img'
          src='/src/assets/brand/LOGOredmensionada.png'
          alt='AvaliaIF Logo'
          sx={{
            width: isMobile ? 120 : 240,
            height: 'auto',
            filter: 'drop-shadow(0 2px 8px rgba(27, 94, 32, 0.1))',
          }}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            // Fallback se a imagem não carregar
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />

        {/* Logo do IFPI Horizontal */}
        <Box
          component='img'
          src='/src/assets/brand/Logo-IFPI-Horizontal.png'
          alt='IFPI Logo'
          sx={{
            width: isMobile ? 120 : 240,
            height: 'auto',
            filter: 'drop-shadow(0 2px 8px rgba(27, 94, 32, 0.1))',
          }}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            // Fallback se a imagem não carregar
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </Box>

      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        component='h1'
        fontWeight='bold'
        color={avaliaIFColors.primary}
        gutterBottom
        sx={{
          zIndex: 1,
          position: 'relative',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      ></Typography>

      <Box
        sx={{
          maxWidth: 480,
          textAlign: 'center',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <Typography
          variant={isMobile ? 'body1' : 'h6'}
          color={avaliaIFColors.text.secondary}
          sx={{
            mb: 1,
            fontWeight: 500,
            lineHeight: 1.5,
          }}
        >
          Sistema de avaliação e gestão de minutas
        </Typography>

        <Typography
          variant='body2'
          color={avaliaIFColors.text.secondary}
          sx={{
            fontStyle: 'italic',
            opacity: 0.8,
            mb: 3,
            lineHeight: 1.4,
          }}
        >
          Otimizando o fluxo de trabalho da coordenação pedagógica
        </Typography>

        <Typography
          variant='caption'
          color={avaliaIFColors.text.secondary}
          sx={{
            display: 'block',
            opacity: 0.7,
            fontSize: isMobile ? '0.7rem' : '0.75rem',
            lineHeight: 1.3,
            fontWeight: 400,
            mt: '50px',
          }}
        >
          Desenvolvido pelo curso de Análise e desenvolvimento de sistemas do
          Campus Corrente
        </Typography>
      </Box>
    </Box>
  );

  // Seção do formulário
  const FormSection = () => (
    <Box
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: isMobile ? 'auto' : '100vh',
        bgcolor: avaliaIFColors.surface,
        position: 'relative',
      }}
    >
      <Card
        elevation={8}
        sx={{
          maxWidth: 420,
          mx: 'auto',
          width: '100%',
          ...commonStyles.card,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant='h4'
            component='h2'
            textAlign='center'
            fontWeight='bold'
            color={avaliaIFColors.primary}
            gutterBottom
            sx={{
              mb: 2,
              fontSize: { xs: '1.75rem', sm: '2rem' },
            }}
          >
            Entrar
          </Typography>

          <Typography
            variant='body2'
            textAlign='center'
            color={avaliaIFColors.text.secondary}
            sx={{
              mb: 3,
              opacity: 0.8,
              fontSize: '0.95rem',
            }}
          >
            Acesse sua conta no AvaliaIF
          </Typography>

          {loginError && (
            <Alert severity='error' sx={{ mb: 2 }}>
              {loginError}
            </Alert>
          )}

          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              inputRef={emailRef}
              margin='normal'
              required
              fullWidth
              id='email'
              label='E-mail institucional'
              name='email'
              autoComplete='email'
              defaultValue={formData.email}
              error={!!emailError}
              helperText={emailError}
              placeholder='usuario@ifpi.edu.br'
              sx={commonStyles.textField}
            />

            <TextField
              inputRef={passwordRef}
              margin='normal'
              required
              fullWidth
              name='password'
              label='Senha'
              type='password'
              id='password'
              autoComplete='current-password'
              defaultValue={formData.password}
              error={!!passwordError}
              helperText={passwordError}
              sx={commonStyles.textField}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              disabled={isLoading}
              startIcon={
                isLoading && (
                  <CircularProgress size={20} sx={{ color: 'white' }} />
                )
              }
              sx={{
                mt: 3,
                mb: 2,
                ...commonStyles.primaryButton,
              }}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>

            <Box
              textAlign='center'
              sx={{
                mt: 2,
              }}
            >
              <Typography
                component='a'
                href='#'
                variant='body2'
                sx={commonStyles.link}
                onClick={(e) => {
                  e.preventDefault();
                  alert(
                    'Funcionalidade de recuperação de senha será implementada em breve!',
                  );
                }}
              >
                Esqueci minha senha
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        {isMobile ? (
          // Layout mobile - vertical
          <Box>
            <FormSection />
            <InstitutionalSection />
          </Box>
        ) : (
          // Layout desktop - horizontal 50/50
          <Box
            sx={{
              display: 'flex',
              minHeight: '100vh',
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <InstitutionalSection />
            </Box>
            <Box sx={{ flex: 1 }}>
              <FormSection />
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
