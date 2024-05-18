import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomeContainer } from "./components/Home/HomeContainer";
import { AboutContainer } from "./components/About/AboutContainer";
import { EventsContainer } from "./components/Events/EventsContainer";
import { TodoContainer } from "./components/Todo/TodoContainer";
import { NotFound } from "./Pages";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomeContainer />}></Route>
          <Route path="/events" element={<EventsContainer />}></Route>
          <Route path="/todo" element={<TodoContainer />}></Route>
          <Route path="/about" element={<AboutContainer />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
