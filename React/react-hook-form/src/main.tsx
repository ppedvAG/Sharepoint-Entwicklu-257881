// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
// Wir importieren deine App-Komponente (die wir vorhin besprochen haben)
import App from './App'

// Wir suchen das HTML-Element mit der ID "root"
const rootElement = document.getElementById('root');

// Sicherheitscheck für TypeScript (falls "root" nicht existiert)
if (!rootElement) {
  throw new Error('Kritischer Fehler: Kein HTML-Element mit ID "root" gefunden!');
}

// Hier wird die React-App "gemountet" (gestartet)
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)