import { forwardRef,useId } from "react";
// const BeforeReact19=forwardRef((props,ref)=>{
//     const id=useId();
//     return (
//         <>
//         <label htmlFor={id}>{props.label}</label>
//         <input className='rounded-md p-3' type="text" ref={ref}/>
//         </>
//     )
// })

// export default BeforeReact19
const BeforeReact19=({label,ref})=>{
    const id=useId();
    return (
        <>
        <label htmlFor={id}>{label}</label>
        <input className='rounded-md p-3' type="text" ref={ref}/>
        </>
    )
}

export default BeforeReact19