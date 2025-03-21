import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <App />
    </AuthProvider>
    
    </BrowserRouter>
    <ToastContainer
    position='top-center'
    autoClose={1000}
    hideProgressBar={true}
    closeButton={false}
    />
    
  </StrictMode>,
)
