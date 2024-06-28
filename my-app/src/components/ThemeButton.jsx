import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { FaSun, FaMoon } from "react-icons/fa";
import "../App.css";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`theme-icon ${theme}`} onClick={toggleTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </div>
  );
}

export default ThemeButton;
