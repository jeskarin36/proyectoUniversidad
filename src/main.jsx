import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import Paginaweb from './views/Paginaweb/Paginaweb'

import Principal from './views/Principal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <Principal></Principal>
    
    
  </StrictMode>,
)
