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
    <div className='grid place-content-center'>
      <h1>UsesState Chalange</h1>
      <p>Count: {count}</p>
      <label>
      Step:  
      <input className='border-2 border-red-800'  type="text" value={step} onChange={(e)=>setStep(Number(e.target.value))}></input>
      </label>
      <br/>
      <br/>
      <button className='bg-black text-white rounded-md text-2xl p-1 mt-2' onClick={handleIncrement} disabled={count>=100}>Increment</button>
      <button className='bg-black text-white rounded-md text-2xl p-1 mt-2' onClick={handleDecrement} disabled={count<=0}>Decrement</button>
      <button className='bg-black text-white rounded-md text-2xl p-1 mt-2' onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Chalange
