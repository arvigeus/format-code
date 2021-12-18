import { Link } from "remix";
import { FaMagic } from "react-icons/fa";
import {
  MdOutlineContentCopy,
  MdOutlineBrightnessMedium,
  MdOutlineHome,
} from "react-icons/md";
import { VscGithub } from "react-icons/vsc";

type PanelProps = {
  name: string;
  settings: Record<string, any> | any;
  handleFormat: () => void;
};

export default function Panel({ name, settings, handleFormat }: PanelProps) {
  return (
    <aside id="panel">
      <button title="Format" onClick={handleFormat}>
        <FaMagic />
      </button>
      <button title="Copy to clipboard" onClick={copyToClipboard}>
        <MdOutlineContentCopy />
      </button>
      <button title="Toggle theme">
        <MdOutlineBrightnessMedium />
      </button>
      <Link to="/" title="Go back">
        <MdOutlineHome />
      </Link>
      <a
        className="github"
        href="https://github.com/arvigeus/format-code"
        rel="noopener noreferrer"
      >
        <VscGithub />
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
