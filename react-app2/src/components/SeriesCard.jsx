import styled from "styled-components";
// const SeriesCard=(props)=>{
const SeriesCard=({curelem})=>{
  // console.log(props)
  const {id,img_url,name,rating,description,genre,cast,watch_url} = curelem;
    return (
        <li className="shadow-md">
          <div className="width=100%">
            <img
              src={img_url}
              alt={id}
            />
          </div>
          <h2 className="text-lg font-bold">Name: {name}</h2>
          <h3 className="text-md font-bold">Rating: <span className={` p-1 text-black rounded-[100rem] ${rating>=8.5?"bg-green-300":"bg-yellow-300"}`}>{rating}</span></h3>
          <p className="mt-2">Summary: {description}</p>
          <p className="mt-2">Genre: {genre}</p>
          <p className="mt-2">Cast: {cast}</p>
          <a href={watch_url} target="_blank">
            <button className={` p-1 font-bold mt-4 text-black  ${rating>=8.5?"bg-green-300":"bg-yellow-300"}`}>Watch Now</button>
          </a>
        </li>
    )
};


export default SeriesCard;