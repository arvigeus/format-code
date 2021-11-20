import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-yaml";
import parserYaml from "prettier/parser-yaml";

import CodeEditor from "../components/CodeEditor";

const Yaml = () => (
  <CodeEditor
    name="YAML"
    prismLangName="yaml"
    lang={languages.yaml}
    options={{
      parser: "yaml",
      plugins: [parserYaml],
    }}
  />
);

export default Yaml;
