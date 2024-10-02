import React,{useState} from 'react';

const Counter=()=>{
    const [count, setCount] = useState(0);
        const handleButtonClick=()=>{
            // count++;
            // setCount(count)
            setCount(()=>count+1)
            console.log(count);
        }
    return (
        <>
        <h1 className='bg-slate-900 text-white rounded-lg p-5 text-center w-[100px]'>{count}</h1>
        <button className='bg-black text-white rounded-lg p-5' onClick={handleButtonClick}>Increment</button>
        </>
    )
}

export default Counter;