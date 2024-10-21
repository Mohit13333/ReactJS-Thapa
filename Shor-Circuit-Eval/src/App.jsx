import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShortCircuit from './components/ShortCircuit'
import Index from './components/UseState'
import Chalange from './components/UseState/Chalange'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Chalange></Chalange>
   <ShortCircuit/>
   <Index/>
   </>
  )
}

export default App
