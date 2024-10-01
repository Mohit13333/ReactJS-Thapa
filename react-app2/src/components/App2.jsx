import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard"
function App2() {
  return (
    <>
    <h1 className="font-bold text-center mb-2">List of netflix series</h1>
      <ul className="grid grid-cols-3 gap-6 m-2">
        {seriesData.map((curelem)=>{
          return(
       <SeriesCard key={curelem.id} curelem={curelem}/>
          )
        })}
      </ul>
    </>
  );
}

export default App2;
