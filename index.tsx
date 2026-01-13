
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const container = document.getElementById('root');
console.log('Container found:', container);

if (container) {
  const root = ReactDOM.createRoot(container);
  console.log('Rendering React root...');
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('React root rendered.');
  } catch (e) {
    console.error('Error during render:', e);
  }
} else {
  console.error('Root container not found!');
}
