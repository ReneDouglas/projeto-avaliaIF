import './assets/globals.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <Heading>AvaliaIF</Heading>
      <main className='flex flex-1 flex-col items-center justify-center text-center p-4'>
        <h2 className='text-5xl font-extrabold text-gray-800'>Bem-vindo!</h2>
        <p className='mt-4 text-xl text-gray-500'>
          Este é o corpo principal do AvaliaIF
        </p>
      </main>
    </div>
  );
}
