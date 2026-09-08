import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  // useRef
  const passwordRef = useRef(null) // Create a ref to store the password value


/*  >>>> useCallback <<<<
    useCallback is a React Hook that lets you cache a function definition between re-renders.
    const cachedFn = useCallback(fn, dependencies)

  >>>> useEffect <<<<
    useEffect is a React Hook that lets you perform side effects in function components.
    useEffect(callback, dependencies)

  >>>> useRef <<<<
    useRef is a React Hook that lets you reference a value that’s not needed for rendering.
*/

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+`~-=[]{};':\"\\|,.<>/?"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length) // Generate a random number
      pass += str.charAt(char) // Get the character at the random index
    }

    setPassword(pass) // Set the password state to the generated password

  }, [length, numberAllowed, charAllowed, setPassword]) //Set Pssword Avoid the infinite loop

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20); // Select the password text
    window.navigator.clipboard.writeText(password) // Copy the password to the clipboard
    setCopied(true)
    setTimeout(() => setCopied(false), 500) // Revert back after 0.5s
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-800'>

      <h1 className='text-white text-center text-xl font-light whitespace-nowrap my-4'>Password generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        
        <input 
        type = "text" 
        value = {password}
        className = "outline-none w-full py-2 px-3 text-gray-700 bg-white"
        placeholder = "Password"
        readOnly
        ref = {passwordRef}
        />

        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-600 text-white px-5 font-medium shrink-0'>{copied ? "copied" : "copy"}</button>
      </div>

      <div className='flex items-center text-sm gap-x-3 flex-wrap'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min = {6}
          max = {100}
          value = {length}
          className = "cursor-pointer accent-blue-500"
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label className='text-orange-500'>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor='numberInput' className='text-orange-500'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor='characterInput' className='text-orange-500'>Characters</label>
        </div>
      </div>

    </div>
    </>
  )
}

export default App