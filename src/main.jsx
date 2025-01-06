import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/utilities.css';
import './styles/animations.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
