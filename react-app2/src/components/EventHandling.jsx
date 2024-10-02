const EventHandling=()=>{

    // function handleButtonClick(){
    //     alert("button clicked")
    // }

    const handleButtonClick=(event)=>{
        console.log(event)
        console.log(event.target)
        alert("button clicked1");
    }
    const handleWelcomeUser=(user)=>{
        console.log(`Hey,${user} welcome!`);
    }
    return (
        <>
        {/* normal function */}
        <button className="bg-yellow-600 p-1 m-20" onClick={handleButtonClick}>Click Me</button>
        <br />
        {/* fat arrow function */}
        <button className="bg-red-600 p-1 m-20" onClick={(event)=>handleButtonClick(event)}>Click Me1</button>
        <br />
        {/* inline function */}
        <button className="bg-green-600 p-1 m-20" onClick={(event)=> console.log(event)}>inline function</button>
        <br/>
        {/* function component with inline arrow function */}
        <button className="bg-blue-600 p-1 m-20" onClick={()=> alert("hey i am inline arrow function")}>inline arrow function</button>
        <br/>
        {/* passing argument to event handlers */}
        <button className="bg-yellow-600 p-1 m-20" onClick={()=>handleWelcomeUser("Mohit")}>Click Me</button>
        </>
    )
}


export default EventHandling;