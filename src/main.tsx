import 'lenis/dist/lenis.css';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { SmoothScrollProvider } from './components/SmoothScrollProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <SmoothScrollProvider>
    <App />
  </SmoothScrollProvider>
);
