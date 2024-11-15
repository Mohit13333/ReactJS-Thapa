import { useBioContext } from "./Index"

const Home = () => {
   const {myName,myAge}= useBioContext();
  return (
    <>
      <h1>Hello context API. my name is {myName}.I am {myAge} years old.</h1>
    </>
  )
}

export default Home
