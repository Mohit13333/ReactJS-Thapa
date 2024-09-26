import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src="qot.jpeg" alt="qot" width="40%" height="40%" />
      </div>
      <h2>NAme: Queens of tears</h2>
      <h3>Rating:8.2</h3>
      <p>
        Summary: Beak Hyun-woo and Hong Hae-in navigate a tense relationship,
        both at home and at work. But upon deciding his future, Hyun-woo pays a
        visit to his family.
      </p>
    </>
  );
}

export default App;
