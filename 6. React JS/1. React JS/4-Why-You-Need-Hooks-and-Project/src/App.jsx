import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // useState hook ->  is a hook which allows us to use state in functional components.
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    //console.log("Add Value", Math.random());
    //counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
    if(counter == 0){
      console.log("Negative no Allow")
    }
    
  }

  return (
   <>
   <h1> Chai aur Code</h1>
   <h2> Counter Value: {counter}</h2>

   <button onClick = {addValue}> Add Value {counter}</button>
   <br></br>
   <button onClick = {removeValue}> Remove Value {counter}</button> 
   <p></p>
   <footer>footer:{counter}</footer>
   </>
  )
}

export default App

// Problem in react -> why need hooks
// UI control by react -> hooks are some methods which allows us to control the UI and state of the application.
// 
// Hooks -> this is inbuilt feature of react which allows us to use state and other features in functional  components.
/*

*/