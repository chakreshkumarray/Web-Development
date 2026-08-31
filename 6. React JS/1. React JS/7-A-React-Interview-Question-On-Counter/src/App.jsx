import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // setCounter((prevCounter) => prevCounter + 1) -> for interview Question
    // setCounter((prevCounter) => prevCounter + 1)
    if(counter < 20){
      setCounter (counter + 1)
    }else{
      console.log("Not greater than 20")
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }else{
      console.log("Negative Number not allowed")
    }
  }

  return (
  <>
   <h1> Chakresh aur Code</h1>
   <h2> Counter Value: {counter}</h2>

   <button onClick = {addValue}> Add Value {counter}</button>
   <button onClick = {removeValue}> Remove Value {counter}</button> 

   <p></p>

   <footer>footer:{counter}</footer>
    </>
  )
}

export default App
