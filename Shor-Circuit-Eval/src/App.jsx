import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShortCircuit from './components/ShortCircuit'
import Index from './components/UseState'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <ShortCircuit/>
   <Index/>
   </>
  )
}

export default App
