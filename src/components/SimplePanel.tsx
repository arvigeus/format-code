import { useContext } from "react";
import { ReactComponent as Theme } from "../icons/theme.svg";
import { ReactComponent as Github } from "../icons/github.svg";

import { ThemeContext } from "../hooks/useDarkMode";

export default function SimplePanel() {
  const toggleTheme = useContext(ThemeContext);
  return (
    <aside id="panel">
      <button title="Toggle theme" onClick={toggleTheme}>
        <Theme />
      </button>
      <a
        className="github"
        href="https://github.com/arvigeus/format-code"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
    </aside>
  );
}
