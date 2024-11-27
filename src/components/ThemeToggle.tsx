import { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi2';

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-2 text-sm uppercase tracking-wider"
    >
      <span>{darkMode ? 'Light' : 'Dark'}</span>
      {darkMode ? (
        <HiSun className="w-5 h-5" />
      ) : (
        <HiMoon className="w-5 h-5" />
      )}
    </button>
  );
};
