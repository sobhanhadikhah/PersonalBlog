import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'animate.css';
import 'react-loading-skeleton/dist/skeleton.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
