import { Helmet } from "react-helmet-async";
import Editor from "react-simple-code-editor";
import { highlight } from "prismjs/components/prism-core";

import useFormatter from "../hooks/useFormatter";
import Panel from "./Panel";

type CodeEditorType = {
  name: string;
  options: any;
  prismLangName: string;
  lang: any;
};

const CodeEditor = ({ name, options, prismLangName, lang }: CodeEditorType) => {
  const { code, handleFormat, onEditorChange } = useFormatter(name, options);
  return (
    <>
      <Helmet>
        <title>{name} formatter</title>
      </Helmet>

      <Editor
        value={code}
        autoFocus
        onValueChange={onEditorChange}
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
