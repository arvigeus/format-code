import { Link } from "@remix-run/react";
import { FaMagic } from "react-icons/fa";
import {
  MdOutlineContentCopy,
  MdOutlineBrightnessMedium,
  MdOutlineHome,
} from "react-icons/md";
import { VscGithub } from "react-icons/vsc";

type PanelProps = {
  onFormat: () => void;
  onCopyToClipboard: () => void;
  reloadDocument: boolean;
  busy: boolean;
};

export default function Panel({
  onFormat,
  onCopyToClipboard,
  reloadDocument,
  busy,
}: PanelProps) {
  return (
    <aside id="panel">
      <button type="button" title="Format" onClick={onFormat}>
        <FaMagic size={24} />
      </button>
      <button
        type="button"
        title="Copy to clipboard"
        onClick={onCopyToClipboard}
      >
        <MdOutlineContentCopy size={24} />
      </button>
      <button title="Toggle theme" type="submit" disabled={busy}>
        <MdOutlineBrightnessMedium size={24} />
      </button>
      <Link to="/" title="Go back" reloadDocument={reloadDocument}>
        <MdOutlineHome size={24} />
      </Link>
      <a
        className="github"
        href="https://github.com/arvigeus/format-code"
        rel="noopener noreferrer"
      >
        <VscGithub size={24} />
      </a>
    </aside>
  );
}

type SimplePanelProps = {
  busy: boolean;
};

export function SimplePanel({ busy }: SimplePanelProps) {
  return (
    <aside id="panel">
      <button title="Toggle theme" type="submit" disabled={busy}>
        <MdOutlineBrightnessMedium size={24} />
      </button>
      <a
        className="github"
        href="https://github.com/arvigeus/format-code"
        rel="noopener noreferrer"
      >
        <VscGithub size={24} />
      </a>
    </aside>
  );
}
