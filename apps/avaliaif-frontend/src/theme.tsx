// Tema oficial do AvaliaIF - Cores e estilos globais
export const avaliaIFColors = {
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

// Estilos reutilizáveis para componentes
export const commonStyles = {
  // Estilo padrão para inputs do AvaliaIF
  textField: {
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
  },

  // Estilo padrão para botões primários do AvaliaIF
  primaryButton: {
    py: 1.5,
    bgcolor: avaliaIFColors.primary,
    color: avaliaIFColors.onPrimary,
    borderRadius: 2,
    textTransform: 'none' as const,
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
  },

  // Estilo para seção institucional
  institutionalSection: {
    background: `linear-gradient(135deg, ${avaliaIFColors.background} 0%, ${avaliaIFColors.accent}20 100%)`,
    position: 'relative' as const,
    '&::before': {
      content: '""',
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23{avaliaIFColors.primary.slice(1)}" fill-opacity="0.03"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z"/%3E%3C/g%3E%3C/svg%3E")',
      opacity: 0.1,
    },
  },

  // Estilo para cards do AvaliaIF
  card: {
    borderRadius: 3,
    border: `1px solid ${avaliaIFColors.accent}40`,
    boxShadow: `0 8px 32px rgba(27, 94, 32, 0.12)`,
  },

  // Estilo para links
  link: {
    textDecoration: 'none' as const,
    fontWeight: 500,
    cursor: 'pointer' as const,
    color: avaliaIFColors.primary,
    '&:hover': {
      color: avaliaIFColors.primaryDark,
      textDecoration: 'underline',
    },
    transition: 'all 0.2s ease',
  },
};
