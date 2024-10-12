import React from "react";
import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <>
      <Grid container justifyContent="center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
      <Grid container justifyContent="center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
      <Grid container justifyContent="center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </>
  );
};

export default MovieList;
