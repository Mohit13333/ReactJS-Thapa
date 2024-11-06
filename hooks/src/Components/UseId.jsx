import React, { useId } from 'react'

const UseId = () => {

//     const userName=useId();
//     const email=useId();

//   return (
//     <div>
//       <form className='grid grid-flow-row gap-2'>
//         <label  htmlFor={userName}>Username:</label>
//         <input className='p-2 rounded-md border-fuchsia-600' id={userName} type='text' name='name'/>
//         <label htmlFor={email}>Email:</label>
//         <input className='p-2 rounded-md border-fuchsia-600' id={email} type="email" name="email" />
//         <button className='bg-black text-white p-3'>Submit</button>

//       </form>
//     </div>
//   )
// }

// export default UseId

const id=useId();

const handleFormSubmit=(e) => {
  e.preventDefault();
  console.log("FormSubmited")
}

return (
    <div>
      <form className='grid grid-flow-row gap-2'onClick={handleFormSubmit}>
        <label  htmlFor={id+'userName'}>Username:</label>
        <input className='p-2 rounded-md border-fuchsia-600' id={id+'userName'} type='text' name='name'/>
        <label htmlFor={id+'email'}>Email:</label>
        <input className='p-2 rounded-md border-fuchsia-600' id={id+'email'} type="email" name="email" />
        <button className='bg-black text-white p-3'>Submit</button>
      </form>
    </div>
  )
}

export default UseId
