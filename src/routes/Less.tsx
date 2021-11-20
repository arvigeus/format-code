import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-css";
import "prismjs/components/prism-css-extras";
import "prismjs/components/prism-less";
import parserPostcss from "prettier/parser-postcss";

import CodeEditor from "../components/CodeEditor";

const CSS = () => (
  <CodeEditor
    name="LESS"
    prismLangName="less"
    lang={languages.less}
    options={{
      parser: "less",
      plugins: [parserPostcss],
    }}
  />
);

export default CSS;
