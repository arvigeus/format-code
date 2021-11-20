import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markdown";
import parserMarkdown from "prettier/parser-markdown";

import CodeEditor from "../components/CodeEditor";

const Mdx = () => (
  <CodeEditor
    name="MDX"
    prismLangName="md"
    lang={languages.markdown}
    options={{
      parser: "mdx",
      plugins: [parserMarkdown],
    }}
  />
);

export default Mdx;
