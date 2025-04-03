import React from "react";
import lightPng from "../../assets/lightmode.png";
import darkPng from "../../assets/darkmode.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative flex items-center">
      <img
        src={lightPng}
        alt="lightmode"
        onClick={toggleTheme}
        className={`w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={darkPng}
        alt="darkmode"
        onClick={toggleTheme}
        className={`w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default DarkMode;
