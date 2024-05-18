import "./App.css";
import { Routes, Route } from "react-router-dom";
import { About, Events, Home, Todo } from "./Pages";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
