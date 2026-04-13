import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CredentialsProvider } from './Contexts/credentialsContext.jsx'
import { CreditProvider } from './Contexts/creditContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CredentialsProvider>
    <CreditProvider>
      <App />
    </CreditProvider>
    </CredentialsProvider>
  </StrictMode>,
)
