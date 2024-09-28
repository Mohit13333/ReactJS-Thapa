function App2() {
  const name = "Queens of tears";
  const rating = "8.2";
  const summary =
    "Beak Hyun-woo and Hong Hae-in navigate a tense relationship,both at home and at work. But upon deciding his future, Hyun-woo pays avisit to his family.";

  // function calls
  const returnGenre = () => {
    const Genre = "RomCom";
    return Genre;
  };

  let age=18;
  // let canWatch="Not Availble";
  // if (age>=18) canWatch="Watch Now";

const canWatch=()=>{
  if (age>=18) return "Watch Now";
  return "Not Availble";
}

  // it voilate the rule that not repeat the code again and again
  // if(age<18){
  //   return (
  //     <>
  //       <div>
  //         <img src="qot.jpeg" alt="qot" width="40%" height="40%" />
  //       </div>
  //       <h2>Name: {name}</h2>
  //       <h3>Rating:{55 / 11}</h3>
  //       <p>Summary: {summary}</p>
  //       <p>Genre: {returnGenre()}</p>
  //       <button >Not Availble</button>
  //     </>
  //   );
  // }
  return (
    <>
      <div>
        <img src="qot.jpeg" alt="qot" width="40%" height="40%" />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating:{55 / 11}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>
      {/* <button>{age>=18?"Watch Now":"Not Availble"}</button> */}
      {/* <button>{canWatch}</button> */}
      <button>{canWatch()}</button>
    </>
  );
}

export default App2;
