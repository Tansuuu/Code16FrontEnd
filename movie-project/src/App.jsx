import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import Services from "./pages/Services";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/category/:id" element={<Categories />} />
        <Route path="/services" element={<Services />} />
        <Route path="/favourite" element={<Favorite />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
