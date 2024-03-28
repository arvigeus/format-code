import { sql, PLSQL } from "@codemirror/lang-sql";
import { plsql } from "sql-formatter";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import useSqlFormatter from "~/hooks/useSqlFormatter";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return [
    {
      title: "PL/SQL code formatter",
    },
  ];
};

export const links: LinksFunction = () => createLanguageManifest("plsql");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => sql({ dialect: PLSQL }), []);
  const isReady = useSqlFormatter({
    dialect: plsql,
    keywordCase: "upper",
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
