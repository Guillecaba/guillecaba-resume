import { useEffect, useState, Dispatch, SetStateAction } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  });
  return [isDark, setIsDark] as [boolean, Dispatch<SetStateAction<boolean>>];
};

export default  useDarkMode;
