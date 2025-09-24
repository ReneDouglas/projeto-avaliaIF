import { useState } from 'react';
import { Login } from './Login';
import { PasswordReset } from './PasswordReset';

type AuthView = 'login' | 'passwordReset';

export function AuthContainer() {
  const [currentView, setCurrentView] = useState<AuthView>('login');

  const handleGoToPasswordReset = () => {
    setCurrentView('passwordReset');
  };

  const handleBackToLogin = () => {
    setCurrentView('login');
  };

  if (currentView === 'passwordReset') {
    return <PasswordReset onBackToLogin={handleBackToLogin} />;
  }

  return <Login onForgotPassword={handleGoToPasswordReset} />;
}
