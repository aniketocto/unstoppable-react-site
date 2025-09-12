import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GalaxyBackground from './components/layouts/GalaxyBackground.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GalaxyBackground />
  </StrictMode>,
)
