import Home from "./Home";

interface Movie {
  id: number;
  title: string;
  year: string;
  poster: string;
}

export function HomeContainer() {
  const movies: Movie[] = [
    {
      id: 1,
      title: "Movie 1",
      year: "2021",
      poster: "../../200x300.png",
    },
    {
      id: 2,
      title: "Movie 2",
      year: "2022",
      poster: "../../200x300.png",
    },
    {
      id: 3,
      title: "Movie 3",
      year: "2023",
      poster: "../../200x300.png",
    },
    {
      id: 4,
      title: "Movie 4",
      year: "2021",
      poster: "../../200x300.png",
    },

    // 他の映画データを追加
  ];
  return (
    <>
      <Home movies={movies} />
    </>
  );
}
export default HomeContainer;
