import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './styles/themes/light.css'


import './styles/components/Layout/BackgroundGradients.css'
import './styles/components/Layout/FloatingOrbs.css'
import './styles/components/Layout/Footer.css'
import './styles/components/Layout/Navigation.css'


import './styles/components/Sections/AboutSection.css'
import './styles/components/Sections/ContactSection.css'
import './styles/components/Sections/HeroSection.css'
import './styles/components/Sections/Sections.css'


import './styles/components/UI/ContactItems.css'
import './styles/components/UI/CtaButtons.css'
import './styles/components/UI/FallingStars.css'
import './styles/components/UI/FocusStatesForAccessibility.css'
import './styles/components/UI/Projects.css'
import './styles/components/UI/ResponsiveDesign.css'
import './styles/components/UI/Skills.css'
import './styles/components/UI/SkillsGrid.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)