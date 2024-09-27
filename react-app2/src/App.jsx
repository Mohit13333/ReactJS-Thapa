import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import  {App2,App3}  from "./components/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <App2/>
      <App2/>
      <App2/>
      <App2/>
      <App3/>
    </>
  );
}

export default App;
