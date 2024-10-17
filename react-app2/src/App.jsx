import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { App2} from "./components/index";
import EventHandling from "./components/EventHandling";
import EventProps from "./components/eventprops";
import EventPropagation from "./components/eventPropagation";
import Counter from "./components/counter";
import DerivedState from "./components/derivedState";
import LiftStateup from "./components/liftStateup";
// import Practise from "./Practises";


function App() {

  return (
    <>
      {/* <App2 /> */}
      {/* <EventProps/> */}
      {/* <EventHandling/> */}
      {/* <EventPropagation/> */}
      {/* <Counter/> */}
      {/* <DerivedState/> */}

      <LiftStateup/>

    </>
  );
}

export default App;
