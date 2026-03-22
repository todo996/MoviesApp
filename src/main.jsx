import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRouter from './AppRouter'
import { MovieProvider } from './context/MovieProvide'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <AppRouter />
      </MovieProvider>
    </BrowserRouter>
  </StrictMode>,
)