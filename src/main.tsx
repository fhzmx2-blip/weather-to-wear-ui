import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import './css/global.css'
import './css/header.css'
import './css/main.css'
import './css/footer.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
