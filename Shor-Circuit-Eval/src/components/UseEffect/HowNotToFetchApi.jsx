import React, { useEffect, useState } from "react";
import axios from 'axios';
const HowNotToFetchApi = () => {
//   const [apiData, setApiData] = useState([]);
const [apiData, setApiData] = useState(null);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => setApiData(data))
//       .catch((err) => console.log(err));
//   }, []);
useEffect(() => {
    const getPostData = async () =>{
  try {
     const response= await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
     setApiData(response.data);
     setLoading(false)
  } catch (error) {
    setApiData("Error while fetching data",error);
    setError(error)
    setLoading(false);
  }
}
getPostData();
},[])
if(loading){
    return(
<div className="text-center text-3xl text-white font-extrabold m-[30%]">Loading...</div>
    )
}
if(error){
    return(
        <div className="grid place-content-center text-3xl mt-[30%] font-bold bg-teal-800 text-gray-200"><h1>Error:{error.message}</h1></div>
    )
}
  return (
    <div className="grid gap-[10px] place-content-center text-white text-2xl font-bold">
      {/* <ul>
        data:
        {apiData.map((curData) => {
          return (
            <li key={curData.id}>
              {curData.id}. {curData.title}
            </li>
          );
        })}
      </ul> */}
      <header >
        <h1 className="text-center">Lets catch pokemon</h1>
      </header>
      <ul>
        <li>
            <figure className="bg-gray-500 grid grid-rows-1 justify-center w-[250px] h-[250px]">
                <img className="w-[220px] h-[220px]" src={apiData.sprites.other.dream_world.front_default} alt={apiData.name} />
                <h1 className="text-center">{apiData.name}</h1>
            </figure>
        </li>
      </ul>
    </div>
  );
};

export default HowNotToFetchApi;
