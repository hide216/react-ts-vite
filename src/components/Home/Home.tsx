import { Box, Container, Typography } from "@mui/material";
import MovieList from "../MoviesParts/MovieList";
import Header from "./Header";
interface Movie {
  id: number;
  title: string;
  year: string;
  poster: string;
  // もし必要なら追加
}

interface HomeProps {
  movies: Movie[];
}

export function Home({ movies }: HomeProps) {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ display: "flex", alignItems: "center", margin: 2 }}>
          <Typography variant="h6" sx={{ color: "#B0B0B0", marginRight: 2 }}>
            こちらでも探す：
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: 2,
              color: "white",
            }}
          >
            <Typography>
              ちいかわ | おぱんちゅうさぎ | ミニオンズ | スヌーピー |
              となりのトトロ | 愛の不時着 | トムとジェリー
            </Typography>
          </Box>
        </Box>

        <MovieList movies={movies} />
      </Container>
    </>
  );
}
export default Home;
