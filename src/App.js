import "./App.css";
import React from 'react'
import { BrowserRouter,Routes,Route, HashRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import EvTechPage from "./pages/EvTechPage";
import Automations from "./pages/AutomationsPage.js";
import EvPage from "./pages/EvPage.js";
function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/automations" element={<Automations/>}/>
        <Route path="/evtech" element={<EvTechPage/>}/>
        <Route path="/ev" element={<EvPage/>}/>
      </Routes>
      </HashRouter>
    </div>
  )
}

export default App