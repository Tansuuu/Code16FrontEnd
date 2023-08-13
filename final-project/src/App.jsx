import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Advantages from "./pages/Advantages";
import Membership from "./pages/Membership";
import About from "./pages/About";
import Trainers from "./pages/Trainers";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div id={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advantages" element={<Advantages />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
    </div>
  );
}

export default App;
