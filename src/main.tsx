import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.tsx'
import App from './App'
import './assets/styles/tailwind.css'
// import DefaultLayout from './components/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
