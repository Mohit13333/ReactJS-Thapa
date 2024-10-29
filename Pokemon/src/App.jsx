import { useState } from 'react'
import Pokemon from './Components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Pokemon/>
    </>
  )
}

export default App