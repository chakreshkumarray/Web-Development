import './App.css'
import Card from './components/Card'

function App() 
{

  let myObj = {
    username: "hitesh",
    age: 21
  }

  let myArr = [1, 2, 3, 4]

  return (
  <>
    <h1 className="text-4xl font-bold text-blue-600">
      Hello Tailwind!
    </h1>

    <h2 className="text-3xl text-red-500">
      Red Text
    </h2>

    <button className="bg-green-500 text-white px-4 py-2 rounded">
      Button
    </button>

   <Card channel="chaiaurcode" someObje={myObj}/>
   <Card username="chakrezh"/>

  </>
  )
}

export default App