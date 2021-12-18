import type { LinksFunction, MetaFunction } from "remix";
import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-sql";
import parserSql from "prettier-plugin-sql";

import CodeEditor from "~/components/CodeEditor";

import stylesUrl from "~/styles/editor.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let meta: MetaFunction = () => {
  return {
    title: "CSS formatter",
  };
};

const Sql = () => (
  <CodeEditor
    name="TSQL"
    prismLangName="sql"
    lang={languages.sql}
    options={{
      parser: "sql",
      plugins: [parserSql],
      language: "tsql",
      uppercase: true,
    }}
  />
);

export default Sql;
