import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShortCircuit from './components/ShortCircuit'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <ShortCircuit/>
   </>
  )
}

export default App
