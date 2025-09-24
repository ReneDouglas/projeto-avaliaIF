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
} from '@mui/material';

// Cores
const avaliaIFColors = {
  primary: '#1B5E20', // Verde principal do AvaliaIF
  primaryLight: '#4CAF50', // Verde claro
  primaryDark: '#0D3F0F', // Verde escuro
  secondary: '#2E7D32', // Verde secundário
  accent: '#81C784', // Verde claro para destaques
  background: '#F1F8E9', // Fundo verde muito claro
  surface: '#FFFFFF', // Branco para cards
  onPrimary: '#FFFFFF', // Texto sobre cor primária
  onSurface: '#1B5E20', // Texto sobre superfície
  text: {
    primary: '#1B5E20',
    secondary: '#2E7D32',
    disabled: '#81C784',
  },
};

export function Login() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Refs para controlar os inputs diretamente
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Estados do formulário
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

      // Simular validação de credenciais
      // CREDENCIAIS DE TESTE PARA ANÁLISE:
      // professor@ifpi.edu.br | senha: 12345
      // pedagogico@ifpi.edu.br | senha: 12345
      // coordenador@ifpi.edu.br | senha: 12345
      // logistica@ifpi.edu.br | senha: 12345
      const validCredentials = [
        { email: 'professor@ifpi.edu.br', password: '12345' },
        { email: 'pedagogico@ifpi.edu.br', password: '12345' },
        { email: 'coordenador@ifpi.edu.br', password: '12345' },
        { email: 'logistica@ifpi.edu.br', password: '12345' },
      ];

      const isValid = validCredentials.some(
        (cred) => cred.email === email && cred.password === password,
      );

      if (isValid) {
        alert('Login realizado com sucesso!');
        // Aqui seria o redirecionamento para o dashboard
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
        background: `linear-gradient(135deg, ${avaliaIFColors.background} 0%, ${avaliaIFColors.accent}20 100%)`,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: isMobile ? 'auto' : '100vh',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23{avaliaIFColors.primary.slice(1)}" fill-opacity="0.03"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z"/%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.1,
        },
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
            width: isMobile ? 120 : 240, //MOBILE : PC
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
            mt: '60px',
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
          borderRadius: 3,
          border: `1px solid ${avaliaIFColors.accent}40`,
          boxShadow: `0 8px 32px rgba(27, 94, 32, 0.12)`,
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '&:hover fieldset': {
                    borderColor: avaliaIFColors.accent,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: avaliaIFColors.primary,
                    borderWidth: '2px',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: avaliaIFColors.primary,
                },
              }}
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '&:hover fieldset': {
                    borderColor: avaliaIFColors.accent,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: avaliaIFColors.primary,
                    borderWidth: '2px',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: avaliaIFColors.primary,
                },
              }}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              disabled={isLoading}
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                bgcolor: avaliaIFColors.primary,
                color: avaliaIFColors.onPrimary,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: `0 4px 16px rgba(27, 94, 32, 0.3)`,
                '&:hover': {
                  bgcolor: avaliaIFColors.primaryDark,
                  boxShadow: `0 6px 20px rgba(27, 94, 32, 0.4)`,
                  transform: 'translateY(-1px)',
                },
                '&:disabled': {
                  bgcolor: avaliaIFColors.text.disabled,
                  color: '#ffffff',
                },
                transition: 'all 0.2s ease-in-out',
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
                color={avaliaIFColors.primary}
                sx={{
                  textDecoration: 'none',
                  fontWeight: 500,
                  cursor: 'pointer',
                  '&:hover': {
                    color: avaliaIFColors.primaryDark,
                    textDecoration: 'underline',
                  },
                  transition: 'all 0.2s ease',
                }}
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
