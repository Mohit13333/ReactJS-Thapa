const EventPropagation = () => {
  const handleGrandParent = (event) => {
    event.stopPropagation();
    console.log("grandParent clicked");
  };
  const handleParrentClick = (event) => {
    event.stopPropagation();
    console.log("parrent clicked");
  };
  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("child clicked");
  };
  return ( 
    <section>
      <div className="bg-blue-400 w-[500px]" onClick={handleGrandParent}>
        <div className="bg-green-400" onClick={handleParrentClick}>
            <button className="bg-yellow-600" onClick={handleChildClick}>
              Child div
            </button>
          </div>
        </div>
    </section>
  );
};

export default EventPropagation;
