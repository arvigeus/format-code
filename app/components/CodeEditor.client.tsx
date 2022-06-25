import CodeMirror from "@uiw/react-codemirror";
import type { LanguageSupport } from "@codemirror/language";
import type { StreamLanguage } from "@codemirror/language";
import { EditorView } from "@codemirror/view";

import theme from "~/lib/editorTheme";

export type CodeEditorProps = {
  value: string;
  language: LanguageSupport | StreamLanguage<any>;
  onChange: (value: string) => void;
};

export default function CodeEditor({
  value,
  language,
  onChange,
}: CodeEditorProps) {
  return (
    <CodeMirror
      value={value}
      theme={theme}
      extensions={[language, EditorView.lineWrapping]}
      onChange={onChange}
      height="100vh"
      autoFocus
    />
  );
}
