import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  year: string;
  poster: string;
  // もし必要なら追加
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
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
