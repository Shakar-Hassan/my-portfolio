import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './styles/themes/light.css'
import './styles/components/Layout.css'
import './styles/components/Sections.css'
import './styles/components/UI.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)