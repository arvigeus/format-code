import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-markup";
import parserXml from "@prettier/plugin-xml";

import CodeEditor from "../components/CodeEditor";

const Html = () => (
  <CodeEditor
    name="XXL"
    prismLangName="markup"
    lang={languages.markup}
    options={{
      parser: "xml",
      plugins: [parserXml],
    }}
  />
);

export default Html;
