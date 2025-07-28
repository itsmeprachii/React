import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
let [counter,setCounter]=useState(15)
const addValue=() =>{
  console.log("value added");
  counter= counter + 1
  setCounter(counter)
}
const removeValue=() =>{
  setCounter(counter - 1)
}
  return (
    <>
     <h2>Counter:{counter}</h2>
     <button onClick={addValue}>Add value {counter}</button>
     <br />
     <button onClick={removeValue}>Decrease value {counter}</button>
    </>
  )
}

export default App
