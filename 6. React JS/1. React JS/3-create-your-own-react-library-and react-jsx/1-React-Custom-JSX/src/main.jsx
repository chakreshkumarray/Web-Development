import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  <div> 
    <h1>  Custom App</h1>
  </div>
}

const anotherElement = (
  <a  href="https://www.google.com" target="_blank"> google</a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp/>
  </StrictMode>,
)