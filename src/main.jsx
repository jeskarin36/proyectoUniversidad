import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Principal from './views/Principal'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Principal />
  </StrictMode>,
)
