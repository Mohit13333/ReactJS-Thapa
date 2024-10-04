import React,{useState} from 'react';

const Counter=()=>{
    const [count, setCount] = useState(0);
        const handleButtonClick=()=>{
            // count++;
            // setCount(count)
            setCount(()=>count+1)
            console.log(count+1);
        };
        const handleDecrementButton=()=>{
            setCount(()=>count==0?0:count-1)
        }
        return (
        <>
        <h1 className='bg-slate-900 text-white rounded-lg p-5 text-center w-[100px]'>{count}</h1>
        <br/>
        <button className='bg-black text-white rounded-lg p-5' onClick={handleButtonClick}>Increment</button>
        <br />
        <br />
        <button className='bg-black text-white rounded-lg p-5' onClick={handleDecrementButton}>Decrement</button>
        </>
    )
}

export default Counter;