import { useState } from 'react'
import ShortCircuit from './components/ShortCircuit'
import Index from './components/UseState'
import Chalange from './components/UseState/Chalange'
import Registration from './components/registraion/Registration'
import RegistrationReact from './components/registraion/RegistrationReact'
import LoginForm from './components/LoginForm/LoginForm'
import ContactForm from './components/ContactForm/ContactForm'
import UseEffect from './components/UseEffect/UseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <Registration/>
   <Chalange></Chalange>
   <ShortCircuit/>
   <Index/>
   <RegistrationReact/> */}
   {/* <LoginForm/> */}
   {/* <ContactForm/> */}
   <UseEffect/>
   </>
  )
}

export default App