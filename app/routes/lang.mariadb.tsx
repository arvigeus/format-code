import { sql, MariaSQL } from "@codemirror/lang-sql";
import { mariadb } from "sql-formatter";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import useSqlFormatter from "~/hooks/useSqlFormatter";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return [
    {
      title: "MariaDB code formatter",
    },
  ];
};

export const links: LinksFunction = () => createLanguageManifest("mariadb");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => sql({ dialect: MariaSQL }), []);
  const isReady = useSqlFormatter({
    dialect: mariadb,
    keywordCase: "upper",
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
