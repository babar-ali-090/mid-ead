import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import CountdownLightSwitch from "./CountdownLightSwitch";

function App() {
   return <CountdownLightSwitch />;
}

export default App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
