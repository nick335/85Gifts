import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Favicon from "react-favicon"
import myFavicon from "../public/favicon.ico"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Favicon url={myFavicon} />
    <App />
  </StrictMode>,
)
