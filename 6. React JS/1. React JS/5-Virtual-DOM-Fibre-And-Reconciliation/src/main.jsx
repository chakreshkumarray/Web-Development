import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
createRoot --> DOM
Virtual DOM -->
Fibre --> React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over   two years of research by the React team.   Website: https://github.com/acdlite/react-fiber-architecture
Reconcilition -->
*/