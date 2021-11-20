import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-regex";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javadoclike";
import "prismjs/components/prism-js-templates";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsdoc";
import "prismjs/components/prism-js-extras";
import "prismjs/components/prism-js-templates";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import parserBabel from "prettier/parser-babel";

import CodeEditor from "../components/CodeEditor";

const JavaScript = () => (
  <CodeEditor
    name="React TypeScript"
    prismLangName="tsx"
    lang={languages.tsx}
    options={{
      parser: "babel",
      plugins: [parserBabel],
    }}
  />
);

export default JavaScript;
