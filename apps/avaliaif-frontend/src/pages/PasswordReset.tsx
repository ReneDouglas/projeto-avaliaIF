import { useState } from 'react';
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
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff, ArrowBack } from '@mui/icons-material';
import { avaliaIFColors, commonStyles } from '../theme';

interface PasswordResetProps {
  onBackToLogin?: () => void;
}

// Seção institucional (reutilizada do Login) - movida para fora do componente principal
const InstitutionalSection = ({ isMobile }: { isMobile: boolean }) => (
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

// Seção do formulário de recuperação - movida para fora do componente principal
const FormSection = ({
  isMobile,
  onBackToLogin,
  formData,
  setFormData,
  emailError,
  newPasswordError,
  confirmPasswordError,
  resetError,
  successMessage,
  isLoading,
  showNewPassword,
  setShowNewPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  handleSubmit,
}: {
  isMobile: boolean;
  onBackToLogin?: () => void;
  formData: { email: string; newPassword: string; confirmPassword: string };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      newPassword: string;
      confirmPassword: string;
    }>
  >;
  emailError: string;
  newPasswordError: string;
  confirmPasswordError: string;
  resetError: string;
  successMessage: string;
  isLoading: boolean;
  showNewPassword: boolean;
  setShowNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirmPassword: boolean;
  setShowConfirmPassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (event: FormEvent) => void;
}) => (
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
        {/* Botão de voltar */}
        <Box sx={{ mb: 2 }}>
          <IconButton
            onClick={onBackToLogin}
            sx={{
              color: avaliaIFColors.primary,
              '&:hover': {
                bgcolor: `${avaliaIFColors.accent}20`,
              },
            }}
          >
            <ArrowBack />
          </IconButton>
        </Box>

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
          Recuperar Senha
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
          Defina uma nova senha para sua conta
        </Typography>

        {resetError && (
          <Alert severity='error' sx={{ mb: 2 }}>
            {resetError}
          </Alert>
        )}

        {successMessage && (
          <Alert severity='success' sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='E-mail institucional'
            name='email'
            autoComplete='email'
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            error={!!emailError}
            helperText={emailError}
            placeholder='usuario@ifpi.edu.br'
            sx={commonStyles.textField}
          />

          <TextField
            margin='normal'
            required
            fullWidth
            name='newPassword'
            label='Nova senha'
            type={showNewPassword ? 'text' : 'password'}
            id='newPassword'
            autoComplete='new-password'
            value={formData.newPassword}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, newPassword: e.target.value }))
            }
            error={!!newPasswordError}
            helperText={newPasswordError}
            sx={commonStyles.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    edge='end'
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            margin='normal'
            required
            fullWidth
            name='confirmPassword'
            label='Confirmar nova senha'
            type={showConfirmPassword ? 'text' : 'password'}
            id='confirmPassword'
            autoComplete='new-password'
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            error={!!confirmPasswordError}
            helperText={confirmPasswordError}
            sx={commonStyles.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge='end'
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            disabled={isLoading || !!successMessage}
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
            {isLoading ? 'Alterando senha...' : 'Alterar senha'}
          </Button>

          <Box textAlign='center' sx={{ mt: 2 }}>
            <Typography
              component='a'
              href='#'
              variant='body2'
              sx={commonStyles.link}
              onClick={(e) => {
                e.preventDefault();
                onBackToLogin?.();
              }}
            >
              Voltar para o login
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  </Box>
);

export function PasswordReset({ onBackToLogin }: PasswordResetProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Estados do formulário - usando estado controlado para evitar problemas com refs
  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [emailError, setEmailError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [resetError, setResetError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Estados para mostrar/ocultar senhas
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Função de validação de senha forte
  const validatePasswordStrength = (password: string): string => {
    if (password.length < 8) {
      return 'A senha deve ter pelo menos 8 caracteres';
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return 'A senha deve conter pelo menos uma letra minúscula';
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return 'A senha deve conter pelo menos uma letra maiúscula';
    }
    if (!/(?=.*\d)/.test(password)) {
      return 'A senha deve conter pelo menos um número';
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      return 'A senha deve conter pelo menos um caractere especial (@$!%*?&)';
    }
    return '';
  };

  // Manipular submit do formulário - usando estado controlado
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Pegar valores do estado
    const { email, newPassword, confirmPassword } = formData;

    // Limpar erros anteriores
    setEmailError('');
    setNewPasswordError('');
    setConfirmPasswordError('');
    setResetError('');
    setSuccessMessage('');

    let hasErrors = false;

    // Validação do e-mail (mesmo padrão do Login)
    if (!email.trim()) {
      setEmailError('E-mail é obrigatório');
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('E-mail inválido');
      hasErrors = true;
    } else if (!email.includes('@ifpi.edu.br')) {
      setEmailError('Deve ser um e-mail institucional do IFPI');
      hasErrors = true;
    }

    // Validação da nova senha
    if (!newPassword) {
      setNewPasswordError('Nova senha é obrigatória');
      hasErrors = true;
    } else {
      const passwordValidation = validatePasswordStrength(newPassword);
      if (passwordValidation) {
        setNewPasswordError(passwordValidation);
        hasErrors = true;
      }
    }

    // Validação da confirmação de senha
    if (!confirmPassword) {
      setConfirmPasswordError('Confirmação de senha é obrigatória');
      hasErrors = true;
    } else if (newPassword !== confirmPassword) {
      setConfirmPasswordError('As senhas não coincidem');
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    setIsLoading(true);
    setResetError('');

    try {
      // Simular requisição de recuperação de senha (mesmo padrão do Login)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Integrar com API de recuperação de senha real
      // Por enquanto, simulando validação para desenvolvimento
      // NOTA: Esta lógica será substituída pela integração com o backend

      // Simulação temporária - remover quando a API estiver pronta
      const isValidReset = email.includes('@ifpi.edu.br');

      if (isValidReset) {
        setSuccessMessage(
          'Senha alterada com sucesso! Você pode fazer login com sua nova senha.',
        );
        // Limpar campos após sucesso
        setFormData({
          email: '',
          newPassword: '',
          confirmPassword: '',
        });
      } else {
        setResetError('E-mail não encontrado no sistema');
      }
    } catch {
      setResetError('Erro interno. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        {isMobile ? (
          // Layout mobile - vertical
          <Box>
            <FormSection
              isMobile={isMobile}
              onBackToLogin={onBackToLogin}
              formData={formData}
              setFormData={setFormData}
              emailError={emailError}
              newPasswordError={newPasswordError}
              confirmPasswordError={confirmPasswordError}
              resetError={resetError}
              successMessage={successMessage}
              isLoading={isLoading}
              showNewPassword={showNewPassword}
              setShowNewPassword={setShowNewPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
              handleSubmit={handleSubmit}
            />
            <InstitutionalSection isMobile={isMobile} />
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
              <InstitutionalSection isMobile={isMobile} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <FormSection
                isMobile={isMobile}
                onBackToLogin={onBackToLogin}
                formData={formData}
                setFormData={setFormData}
                emailError={emailError}
                newPasswordError={newPasswordError}
                confirmPasswordError={confirmPasswordError}
                resetError={resetError}
                successMessage={successMessage}
                isLoading={isLoading}
                showNewPassword={showNewPassword}
                setShowNewPassword={setShowNewPassword}
                showConfirmPassword={showConfirmPassword}
                setShowConfirmPassword={setShowConfirmPassword}
                handleSubmit={handleSubmit}
              />
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
