import React, { useState } from 'react';
import { IoIosSwitch } from "react-icons/io";


function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
    <h1 className='font-bold flex justify-center bg-slate-950 p-5 text-white'>Toggle switch <IoIosSwitch className='text-red-800' />
    </h1>
    <div className='w-screen h-screen flex items-center justify-center'>
    <div
      className={`rounded-[50px] w-[190px] h-[86px] p-1 cursor-pointer ${
        isOn ? 'bg-green-800' : 'bg-red-900'}
      `}
      onClick={handleToggle}
    >
      {/* Inner switch */}
      <div
        className={`w-[80px] h-[80px] rounded-full ring-offset-white shadow-md transform duration-300 ease-in-out ${
          isOn ? ' bg-green-800 translate-x-[100px]' : 'bg-red-900 translate-x-0'
        }`}
      >
        <span className={`ml-4 text-[30px] font-bold  text-white`}>
        {isOn ? 'ON' : 'OFF'}
      </span>
      </div>
    </div>
    </div>
    </>
  );
}

export default ToggleSwitch;