import { highlight } from "prismjs/components/prism-core";

const hightlightWithLineNumbers = (input: string, lang: any) => highlight(input, lang)
.split("\n")
.map(
  (line: string, i: number) =>
    `<span class='editorLineNumber'>${i + 1}</span>${line}`
)
.join("\n");

export default hightlightWithLineNumbers;