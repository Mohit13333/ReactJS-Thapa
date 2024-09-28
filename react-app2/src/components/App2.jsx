import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard"
function App2() {
  return (
    <>
      <ul>
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
