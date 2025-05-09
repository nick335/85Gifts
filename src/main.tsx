import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Favicon from "react-favicon"
import myFavicon from "../public/favicon.ico"
import { ErrorBoundary } from "react-error-boundary"
import ErrorBoundaryUi from '@/components/ErrorBoundary.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ErrorBoundary FallbackComponent={ErrorBoundaryUi} >
    <Favicon url={myFavicon} />
    <App />   
  </ErrorBoundary>
    </StrictMode>,
)
