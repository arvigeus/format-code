import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-css";
import parserPostcss from "prettier/parser-postcss";

import CodeEditor from "../components/CodeEditor";

const Css = () => (
  <CodeEditor
    name="CSS"
    prismLangName="css"
    lang={languages.css}
    options={{
      parser: "css",
      plugins: [parserPostcss],
    }}
  />
);

export default Css;
