import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-plsql";
import parserSql from "prettier-plugin-sql";

import CodeEditor from "../components/CodeEditor";

const Sql = () => (
  <CodeEditor
    name="PL/SQL"
    prismLangName="sql"
    lang={languages.sql}
    options={{
      parser: "sql",
      plugins: [parserSql],
      language: "plsql",
      uppercase: true,
    }}
  />
);

export default Sql;
