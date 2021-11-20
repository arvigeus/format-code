import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Format } from "../icons/format.svg";
import { ReactComponent as Copy } from "../icons/copy.svg";
import { ReactComponent as Theme } from "../icons/theme.svg";
import { ReactComponent as Home } from "../icons/home.svg";
import { ReactComponent as Github } from "../icons/github.svg";

import { ThemeContext } from "../hooks/useDarkMode";

type PanelProps = {
  name: string;
  settings: Record<string, any> | any;
  handleFormat: () => void;
};

export default function Panel({ name, settings, handleFormat }: PanelProps) {
  const toggleTheme = useContext(ThemeContext);
  return (
    <aside id="panel">
      <button title="Format" onClick={handleFormat}>
        <Format />
      </button>
      <button title="Copy to clipboard" onClick={copyToClipboard}>
        <Copy />
      </button>
      <button title="Toggle theme" onClick={toggleTheme}>
        <Theme />
      </button>
      <Link to="/" title="Go back">
        <Home />
      </Link>
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

function copyToClipboard() {
  const cb = navigator.clipboard;
  const code = document.querySelector("#codeArea");
  // @ts-ignore
  cb.writeText(code.value);
}
