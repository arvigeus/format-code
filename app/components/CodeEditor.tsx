import { KeyboardEventHandler } from "react";
import { highlight } from "prismjs/components/prism-core";

import useFormatter from "~/hooks/useFormatter";
import Editor from "~/lib/Editor";
import Panel from "./Panel";

type CodeEditorType = {
  name: string;
  options: any;
  prismLangName: string;
  lang: any;
};

const CodeEditor = ({ name, options, prismLangName, lang }: CodeEditorType) => {
  const { code, handleFormat, onEditorChange } = useFormatter(name, options);
  const handleEnter: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === "Enter" && event.ctrlKey) handleFormat();
    return true;
  };
  return (
    <>
      <Editor
        value={code}
        autoFocus
        onValueChange={onEditorChange}
        // @ts-ignore
        onKeyPress={handleEnter}
        highlight={(code) => hightlightWithLineNumbers(code, lang)}
        padding={10}
        className="editor"
        textareaId="codeArea"
        preClassName={`language-${prismLangName}`}
      />

      <Panel name={name} settings={options} handleFormat={handleFormat} />
    </>
  );
};

const hightlightWithLineNumbers = (input: string, l: any) =>
  highlight(input, l)
    .split("\n")
    .map(
      (line: string, i: number) =>
        `<span class='editorLineNumber'>${i + 1}</span>${line}`
    )
    .join("\n");

export default CodeEditor;
