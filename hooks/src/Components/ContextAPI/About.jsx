import { useContext,use } from "react";
import { BioContext, useBioContext } from "./Index";

const About = () => {
  // const {myName,myAge}= useBioContext();
  // const {myName,myAge} = use(BioContext)
  // const {myName,myAge} = useContext(BioContext)
  const newHook=true;
  let myName,myAge;
if(newHook){
   ({myName,myAge} = use(BioContext));
}
  return (
    <>
      <h1>Hello context API (About). my name is {myName}.I am {myAge} years old.</h1>
    </>
  )
}

export default About