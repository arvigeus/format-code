import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-markup";
import parserHtml from "prettier/parser-html";

import CodeEditor from "../components/CodeEditor";

const Html = () => (
  <CodeEditor
    name="Html"
    prismLangName="markup"
    lang={languages.markup}
    options={{
      parser: "html",
      plugins: [parserHtml],
    }}
  />
);

export default Html;
