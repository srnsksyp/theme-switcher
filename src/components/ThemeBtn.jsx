import React from "react";
import useTheme from "../contexts/Theme";

// This component is a toggle switch for changing themes
// It uses a checkbox input to toggle between light and dark themes
export default function ThemeBtn() {
    // Destructure the theme context to get the current theme and functions to change it
    const { themeMode, lightTheme, darkTheme } = useTheme();
    // Function to handle the change event of the checkbox
    // It checks the current state of the checkbox and applies the corresponding theme
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    };
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" onChange={onChangeBtn} checked={themeMode==='dark'}/>
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        Toggle Theme
      </span>
    </label>
  );
}
