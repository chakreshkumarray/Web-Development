import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// A Custom Hook is a reusable function that starts with use and can use other React Hooks to share stateful logic between components.
// A Custom Hook is a JavaScript function that lets you reuse React logic between components.
// Suppose two components need the same counter logic
// Instead of copying the logic, create a Custom Hook.
// Important: A Custom Hook shares logic, not the UI.
