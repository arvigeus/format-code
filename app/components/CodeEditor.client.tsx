import CodeMirror from "@uiw/react-codemirror";
import { LanguageSupport } from "@codemirror/language";
import { StreamLanguage } from "@codemirror/stream-parser";
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
