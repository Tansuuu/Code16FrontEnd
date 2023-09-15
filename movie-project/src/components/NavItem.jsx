import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as faMooon } from "@fortawesome/free-solid-svg-icons";

function NavItem() {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <>
      <button className="theme-btn" onClick={handleTheme}>
        {theme === "dark" ? (
          <FontAwesomeIcon icon={faMooon} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
    </>
  );
}

export default NavItem;
