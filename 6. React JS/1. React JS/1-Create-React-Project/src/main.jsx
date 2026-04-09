import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
React
React-DOM-> Web
React-Native -> Mobile

npx / npm --> node package manager
create-react-app --> utility --> software
npx create-react-app --> old method
package,json--> entry point of react js --> provided some script to help run code or build UI, debugger, console, vite version, react, kernal
vite is a bundler

--> npm create vite@latest
-- npm install --> node_modules
--> npm run dev
*/