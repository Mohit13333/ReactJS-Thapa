import React, { useContext } from 'react'
import { BioContext } from './Index'

const About = () => {
   const {myName,myAge}= useContext(BioContext)
  return (
    <>
      <h1>Hello context API (About). my name is {myName}.I am {myAge} years old.</h1>
    </>
  )
}

export default About