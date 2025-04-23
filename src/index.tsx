import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './router';

// Verifique se o elemento com id 'root' existe antes de usá-lo
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
} else {
  console.error('Elemento com id "root" não encontrado.');
}
