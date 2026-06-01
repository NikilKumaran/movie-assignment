import React, {useEffect,useState} from "react";
import "./App.css";

function App(){

  const [movies,setMovies]=useState([]);

  useEffect(()=>{

    fetch("/api/movies")
      .then(res=>res.json())
      .then(data=>setMovies(data));

  },[]);

  return(

    <div>

      <h1>Movie List</h1>

      {movies.map(movie=>(

        <div className="box" key={movie.id}>

          <h3>{movie.title}</h3>

          <p>{movie.tagline}</p>

          <small>{movie.vote_average}/10</small>

        </div>

      ))}

    </div>

  );
}

export default App;