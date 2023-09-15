import { useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function handleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }
  return [theme, handleTheme];
}

export default useTheme;
