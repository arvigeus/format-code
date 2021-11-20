import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-json";
import "prismjs/components/prism-json5";
import parserBabel from "prettier/parser-babel";

import CodeEditor from "../components/CodeEditor";

const Json5 = () => (
  <CodeEditor
    name="JSON"
    prismLangName="json5"
    lang={languages.json5}
    options={{
      parser: "json5",
      plugins: [parserBabel],
    }}
  />
);

export default Json5;
