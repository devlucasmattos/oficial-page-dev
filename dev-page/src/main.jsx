import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Create particles container if it doesn't exist
const particlesContainer = document.getElementById('particles-js');
if (!particlesContainer) {
  const particlesDiv = document.createElement('div');
  particlesDiv.id = 'particles-js';
  particlesDiv.setAttribute('aria-hidden', 'true');
  particlesDiv.style.position = 'fixed';
  particlesDiv.style.width = '100%';
  particlesDiv.style.height = '100%';
  particlesDiv.style.top = '0';
  particlesDiv.style.left = '0';
  particlesDiv.style.zIndex = '1';
  particlesDiv.style.pointerEvents = 'none';
  document.body.prepend(particlesDiv);
}

// Create root and render app
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);