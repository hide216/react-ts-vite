import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  year: string;
  poster: string;
  // 映画詳細ページのリンク
}

interface MovieCardProps {
  movie: Movie;
}
const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card sx={{ maxWidth: 200, margin: 1 }}>
      <Button component={Link} to="/video" sx={{ padding: 0 }}>
        <CardMedia
          component="img"
          height="300"
          image={movie.poster}
          alt={movie.title}
        />
      </Button>
      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.year}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
