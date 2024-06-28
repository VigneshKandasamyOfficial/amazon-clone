import "./App.css";
import { useEffect, useState } from "react";

import { ThemeContext } from "./contexts/theme";

import Header from "./components/Header";

import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./components/Footer/Footer";



function App() {
  const [theme, setTheme] = useState("Light");
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  function toggleTheme() {
    setTheme(theme === "Light" ? "Dark" : "Light");
    setCount(count + 1);
  }
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleTheme,
        count: count,
        setCount: setCount,
      }}
    >
      <Header />
     
      <Outlet />
      
      
      <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition: Bounce/>
    </ThemeContext.Provider>
  );
}

export default App;
