import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles.css';
import Auth0ProviderWithHistory from './authConfig';

// Use createRoot to render the application
createRoot(document.getElementById('root')).render(
  <Auth0ProviderWithHistory>
    <Router>
      <App />
    </Router>
  </Auth0ProviderWithHistory>
);
