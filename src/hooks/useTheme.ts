import { useState, useEffect, useMemo, useCallback } from "react";

type ThemeKey = "light" | "dark" | "init";

type ReturnType = {
  theme: ThemeKey;
  isDarkMode: boolean;
  setTheme: (theme: ThemeKey) => void;
  toggleTheme: () => void;
};

const useTheme = (): ReturnType => {
  const [theme, setTheme] = useState<ThemeKey>("init");
  const isDarkMode = theme === "dark";

  // 초기 다크모트 세팅
  useEffect(() => {
    const preferDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initalTheme = (localStorage?.getItem("theme") ||
      (preferDarkMode ? "dark" : "light")) as ThemeKey;
    localStorage.setItem("theme", initalTheme);
    document.body.dataset.theme = initalTheme;
    setTheme(initalTheme);
  }, []);

  // 초기 이후 사용자가 다크모드 상태를 변경할 경우
  useEffect(() => {
    if (theme === "init") return;
    localStorage.setItem("theme", theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, isDarkMode, setTheme, toggleTheme };
};

export default useTheme;
