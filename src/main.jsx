import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CarritoProveedor } from './contexto/CarritoContexto.jsx'
import App from './App.jsx'
import './styles/tokens.css'
import './styles/base.css'
import './styles/componentes.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarritoProveedor>
        <App />
      </CarritoProveedor>
    </BrowserRouter>
  </React.StrictMode>,
)
