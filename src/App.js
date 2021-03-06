import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Router from "./constants/Router";
import useLocalStorage from "use-local-storage";

function App() {
  const changeTheme = useSelector((state) => {
    return state.themeChangeReducer;
  });

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  useEffect(() => {
    setTheme(changeTheme.theme);
  }, [changeTheme, setTheme]);

  useEffect(() => {
    const newTheme =
      theme === "light" ? "light" : theme === "dark" ? "dark" : "default";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", theme)
  }, [setTheme, theme]);

  return (
    <div className="App" data-theme={theme}>
      <Router />
    </div>
  );
}

export default App;
