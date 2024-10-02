const eventProps=()=>{
    const HandleWelcomeUser=(user)=>{
        alert(` Hey, ${user} Welcome`)
    }
    const handleHover=()=>{
        alert(`Hey thanks for hovering me`)
    }
    return (
        <>
        <WelcomeUser onClick={()=> HandleWelcomeUser("Mohit")}
        onMouseEnter={handleHover} />
        </>
    )
}

const WelcomeUser=(props)=>{
    // destructuring props
    const { onClick,onMouseEnter}=props
    const handleGreeting=()=>{
        console.log(`Hey user welcome`);
        onClick();
    }
    return(
        <>
        <div className="w-3 grid grid-rows-3 gap-4">
        <button className="bg-blue-700 p-2" onClick={onClick}>Click</button>
        <button className="bg-green-700 p-2"  onMouseEnter={onMouseEnter}>Hover me</button>
        <button className="bg-red-700 p-2"  onClick={handleGreeting}>Greeting</button>
        </div>
        </>
    )
}

export default eventProps;