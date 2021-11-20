import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-graphql";
import parserGraphql from "prettier/parser-graphql";

import CodeEditor from "../components/CodeEditor";

const Graphql = () => (
  <CodeEditor
    name="GraphQL"
    prismLangName="graphql"
    lang={languages.graphql}
    options={{
      parser: "graphql",
      plugins: [parserGraphql],
    }}
  />
);

export default Graphql;
