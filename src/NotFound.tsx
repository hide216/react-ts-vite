// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";

const NotFound = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background:
          "url(https://source.unsplash.com/random/800x600) no-repeat center center fixed",
        backgroundSize: "cover",
        textAlign: "center",
        color: "white",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 3,
          padding: 4,
          boxShadow: 3,
        }}
      >
        <ErrorOutline
          sx={{ fontSize: 60, color: "#f44336", marginBottom: 3 }}
        />
        <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 2 }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          ページが見つかりません
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={{
            padding: "12px 24px",
            fontSize: "1.1rem",
            textTransform: "none",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
            "&:hover": {
              backgroundColor: "#1976d2",
              boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.4)",
            },
          }}
        >
          ホームに戻る
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
