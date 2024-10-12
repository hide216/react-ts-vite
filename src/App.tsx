import { Routes, Route } from "react-router-dom";
import { HomeContainer } from "./components/Home/HomeContainer";
import VideoPage from "./components/VideoPage";
import { NotFound } from "./Pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  // テーマ'dark'を反映するための関数
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Routes>
          <Route path="/" element={<HomeContainer />}></Route>
          <Route path="*" element={<VideoPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
