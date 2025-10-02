import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContainer } from './pages';
import { AvaliarMinutas } from './pages/AvaliarMinutas';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthContainer />} />
        <Route path='/login' element={<AuthContainer />} />
        <Route path='/avaliar-minutas' element={<AvaliarMinutas />} />
      </Routes>
    </BrowserRouter>
  );
}
