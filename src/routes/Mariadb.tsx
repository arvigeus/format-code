import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-sql";
import parserSql from "prettier-plugin-sql";

import CodeEditor from "../components/CodeEditor";

const Sql = () => (
  <CodeEditor
    name="MariaDB"
    prismLangName="sql"
    lang={languages.sql}
    options={{
      parser: "sql",
      plugins: [parserSql],
      language: "mariadb",
      uppercase: true,
    }}
  />
);

export default Sql;
