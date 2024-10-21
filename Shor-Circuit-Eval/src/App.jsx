import { useState } from 'react'
import ShortCircuit from './components/ShortCircuit'
import Index from './components/UseState'
import Chalange from './components/UseState/Chalange'
import Registration from './components/registraion/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Registration/>
   {/* <Chalange></Chalange>
   <ShortCircuit/>
   <Index/> */}
   </>
  )
}

export default App
