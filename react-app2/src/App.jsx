import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { App2} from "./components/index";
import EventHandling from "./components/EventHandling";
// import Practise from "./Practises";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <App2 /> */}
      <EventHandling/>
    </>
  );
}

export default App;
