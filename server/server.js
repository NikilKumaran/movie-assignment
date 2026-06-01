const express = require("express");
const movies = require("./movies_metadata.json");

const app = express();

app.get("/api/movies",(req,res)=>{

    res.json(movies.slice(0,10));

});

app.get("/api/movies/:id",(req,res)=>{

    const movie = movies.find(
        movie => String(movie.id) === req.params.id
    );

    res.json(movie);

});

app.listen(3001,()=>{
    console.log("running");
});