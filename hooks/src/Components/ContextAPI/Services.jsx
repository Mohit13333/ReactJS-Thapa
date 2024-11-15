import { useBioContext } from "./Index";

const Services = () => {
  const {myName,myAge}= useBioContext();
  return (
    <>
      <h1>Hello context API (Services) . my name is {myName}.I am {myAge} years old.</h1>
    </>
  )
}

export default Services;