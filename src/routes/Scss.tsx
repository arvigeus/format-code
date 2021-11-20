import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-css";
import "prismjs/components/prism-css-extras";
import "prismjs/components/prism-scss";
import parserPostcss from "prettier/parser-postcss";

import CodeEditor from "../components/CodeEditor";

const Scss = () => (
  <CodeEditor
    name="Scss"
    prismLangName="scss"
    lang={languages.scss}
    options={{
      parser: "scss",
      plugins: [parserPostcss],
    }}
  />
);

export default Scss;
