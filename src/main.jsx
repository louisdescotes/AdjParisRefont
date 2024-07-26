import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ReactLenis, useLenis } from 'lenis/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactLenis root>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReactLenis>
)
