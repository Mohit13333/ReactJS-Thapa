import React, { useEffect, useState } from 'react'

const Cleanup = () => {
    const [count,setCount]=useState(250000)
        useEffect(() =>{
           const interval= setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)
        return ()=>clearInterval(interval)
        },[])
  return (
    <div className='grid place-content-center text-white text-2xl font-bold m-[30%]'>
      <div>
        <p>My Subscriber on youtube</p>
        <div>
           Subscriber: {count}
        </div>
        <h3>RealTime Counter</h3>
      </div>
    </div>
  )
}

export default Cleanup
