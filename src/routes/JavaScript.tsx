import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-regex";
import "prismjs/components/prism-javascript";
import parserBabel from "prettier/parser-babel";

import CodeEditor from "../components/CodeEditor";

const JavaScript = () => (
  <CodeEditor
    name="JavaScript"
    prismLangName="js"
    lang={languages.js}
    options={{
      parser: "babel",
      plugins: [parserBabel],
    }}
  />
);

export default JavaScript;
