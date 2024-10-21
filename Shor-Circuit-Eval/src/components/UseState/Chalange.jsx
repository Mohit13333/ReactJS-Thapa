import React, { useState } from 'react'

const Chalange = () => {
    const [count,setCount]=useState(0);
    const [step,setStep] = useState(1);
    const handleIncrement=() =>{
        setCount(count+step);
        // count<100?setCount(count+step):count;
    }
    const handleDecrement=() =>{
        setCount(count-step);
        // count <= 0 ? 0: setCount(count-step)
    }
  return (
    <div>
      <h1>UsesState Chalange</h1>
      <p>Count: {count}</p>
      <label>
      Step:  
      <input type="text" value={step} onChange={(e)=>setStep(Number(e.target.value))}></input>
      </label>
      <br/>
      <br/>
      <button onClick={handleIncrement} disabled={count>=100}>Increment</button>
      <button onClick={handleDecrement} disabled={count<=0}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Chalange
