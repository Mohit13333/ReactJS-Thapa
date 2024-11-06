import React, { useContext } from 'react'
import { BioContext } from './Index'

const Services = () => {
   const {myName,myAge}= useContext(BioContext)
  return (
    <>
      <h1>Hello context API (Services) . my name is {myName}.I am {myAge} years old.</h1>
    </>
  )
}

export default Services;