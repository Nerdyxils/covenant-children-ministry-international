import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Comprehensive ResizeObserver error suppression
const originalError = console.error;
console.error = (...args) => {
  if (args[0]?.includes?.('ResizeObserver') || 
      args[0]?.includes?.('ResizeObserver loop') ||
      args[0]?.includes?.('undelivered notifications')) {
    return;
  }
  originalError.apply(console, args);
};

// Suppress window error events
window.addEventListener('error', (event) => {
  if (event.message?.includes?.('ResizeObserver') ||
      event.message?.includes?.('ResizeObserver loop') ||
      event.message?.includes?.('undelivered notifications')) {
    event.preventDefault();
    return false;
  }
});

// Suppress unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason?.message?.includes?.('ResizeObserver') ||
      event.reason?.message?.includes?.('ResizeObserver loop') ||
      event.reason?.message?.includes?.('undelivered notifications')) {
    event.preventDefault();
    return false;
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
