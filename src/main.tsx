import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AlarmaSalud } from  './AlarmaSalud'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlarmaSalud/>
  </StrictMode>,
)
