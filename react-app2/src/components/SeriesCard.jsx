const SeriesCard=(props)=>{
    return (
        <li key={props.curelem.id}>
          <div>
            <img
              src={props.curelem.img_url}
              alt={props.curelem.id}
              width="40%"
              height="40%"
            />
          </div>
          <h2>Name: {props.curelem.name}</h2>
          <h3>Rating:{props.curelem.rating}</h3>
          <p>Summary: {props.curelem.description}</p>
          <p>Genre: {props.curelem.genre}</p>
          <p>Cast: {props.curelem.cast}</p>
          <a href={props.curelem.watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
        </li>
    )
};


export default SeriesCard;