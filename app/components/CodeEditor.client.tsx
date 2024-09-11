import CodeMirror from "@uiw/react-codemirror";
import type { LanguageSupport, StreamLanguage } from "@codemirror/language";
import { EditorView } from "@codemirror/view";
import { Extension } from "@codemirror/state";
import theme from "~/lib/editorTheme";

export type CodeEditorProps = {
  value: string;
  language: LanguageSupport | StreamLanguage<unknown>;
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
      extensions={[language, EditorView.lineWrapping, customExtensions]}
      onChange={onChange}
      height="100vh"
      autoFocus
    />
  );
}

export const customExtensions: Extension = EditorView.theme({
  // Disable selecting line numbers
  ".cm-gutters": {
    userSelect: "none",
  },
});
