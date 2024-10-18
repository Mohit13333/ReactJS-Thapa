import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todos from './Componenets/Todos/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todos/>
    </>
  )
}

export default App
