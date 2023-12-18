import { useState } from 'react'
import miFoto from './assets/fotoMia.png'
import logoTikTok from './assets/tiktok.png'
import logoInstagram from './assets/instagram.png'
import logoGithub from './assets/github.png'
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css'



function App() {
  return (
    <div className="container">
            <SpeedInsights/>

      <img src={miFoto} className="foto" alt="Mi foto" />
      <h1>David Aparicio López</h1>
      <h2>Desarrollador Web</h2>
      <div className="logos">
        <a href="https://www.tiktok.com/@codev.jr" target="_blank">
          <img src={logoTikTok} className="logo" alt="Logo de TikTok" />
        </a>
        <a href="https://www.instagram.com/daviz.dev" target="_blank">
          <img src={logoInstagram} className="logo" alt="Logo de Instagram" />
        </a>
        <a href="https://github.com/Da33vid" target="_blank">
          <img src={logoGithub} className="logo" alt="Logo de Github" />
        </a>
      </div>
    </div>
  )
}

export default App
