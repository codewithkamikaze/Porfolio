import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Set DARK MODE by default on first load
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;

    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    setIsDarkMode(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-12 right-5 md:right-10 z-50",
        "p-3 rounded-full",
        "backdrop-blur-xl border border-white/10",
        "bg-white/60 dark:bg-black/40",
        "shadow-lg shadow-black/10 dark:shadow-black/40",
        "hover:scale-110 active:scale-95",
        "transition-all duration-300 ease-out"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};