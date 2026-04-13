import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2 className='text-2xl'>Hello, React!</h2>
  </StrictMode>,
)
