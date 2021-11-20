import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-regex";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-js-templates";
import "prismjs/components/prism-typescript";
import parserTs from "prettier/parser-typescript";

import CodeEditor from "../components/CodeEditor";

const TypeScript = () => (
  <CodeEditor
    name="TypeScript"
    prismLangName="ts"
    lang={languages.ts}
    options={{
      parser: "typescript",
      plugins: [parserTs],
    }}
  />
);

export default TypeScript;
