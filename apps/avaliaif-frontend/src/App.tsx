// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { AvaliarMinutas } from './pages/AvaliarMinutas';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/avaliar-minutas' element={<AvaliarMinutas />} />
      </Routes>
    </BrowserRouter>
  );
}
