import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

// App component that manages theme mode and renders the Card component
export default function App() {
  // State to manage the current theme mode, default is "light"
  // Functions to switch between light and dark themes
  const [themeMode, setThemeMode] = useState("light")
  // Function to set the theme mode to light
  // This function updates the themeMode state to "light"
  // It can be called from the ThemeBtn component to switch to light theme
  // Similarly, darkTheme function sets the theme mode to "dark"
  // This function updates the themeMode state to "dark"
  // It can be called from the ThemeBtn component to switch to dark theme
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Actual theme toggle logic goes here
  // The useEffect hook is used to apply the theme class to the HTML element based on the current theme mode
  // It listens for changes in the themeMode state and updates the class on the <html> element accordingly, removing any existing "light" or "dark" classes and adding the current theme mode class
  // This ensures that the theme is applied globally across the application
  // The useEffect hook runs after the component mounts and whenever the themeMode state changes
  // The add method adds the current themeMode class (either "light" or "dark") to the HTML element
  // This way, the theme is applied globally across the application
  // The themeMode state is used to determine which class to add to the HTML element
  // This way, the theme is applied globally across the application
  useEffect(() => {
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  // Render the App component with the current theme mode and the theme mode functions
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}
