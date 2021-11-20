import { useContext } from "react";
import { ReactComponent as Theme } from "../icons/theme.svg";

import { ThemeContext } from "../hooks/useDarkMode";

export default function SimplePanel() {
  const toggleTheme = useContext(ThemeContext);
  return (
    <aside id="panel">
      <button title="Toggle theme" onClick={toggleTheme}>
        <Theme />
      </button>
    </aside>
  );
}
