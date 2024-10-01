import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home.tsx'
import ProjectNluInRtsGame from './components/pages/ProjectNluInRtsGame.tsx'
import ProjectSmartCamMan from './components/pages/ProjectSmartCamMan.tsx'
import ProjectP4Server from './components/pages/ProjectP4Server.tsx'
import ProjectHomelabWeb from './components/pages/ProjectHomelabWeb.tsx'
import ProjectSequenceDetector from './components/pages/ProjectSequenceDetector.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='nlu-in-rts-game' element={<ProjectNluInRtsGame/>}/>
          <Route path='smart-cam-man' element={<ProjectSmartCamMan/>}/>
          <Route path='seq-detector' element={<ProjectSequenceDetector/>}/>
          <Route path='p4-server' element={<ProjectP4Server/>}/>
          <Route path='homelab-web' element={<ProjectHomelabWeb/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)