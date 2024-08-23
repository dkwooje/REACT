import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//App(); 이다.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />           
  </StrictMode>,
)
