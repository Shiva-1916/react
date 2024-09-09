import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TODO } from './components/hooks/useReducer/todo';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TODO/>
  </StrictMode>
)
