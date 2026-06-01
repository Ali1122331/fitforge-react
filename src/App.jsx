import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Workouts from "./components/Workouts";
import Nutrition from "./components/Nutrition";
import Progress from "./components/Progress";
import Contact from "./components/Contact";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <Navbar page={page} setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "workouts" && <Workouts />}
      {page === "nutrition" && <Nutrition />}
      {page === "progress" && <Progress />}
      {page === "contact" && <Contact />}
    </div>
  );
}

export default App;