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

/*

--> In React JSX html used and in backend html convert in js object and then render in browser.

*/