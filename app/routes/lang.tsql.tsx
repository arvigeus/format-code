import { sql, MSSQL } from "@codemirror/lang-sql";
import { transactsql } from "sql-formatter";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import useSqlFormatter from "~/hooks/useSqlFormatter";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return [
    {
      title: "TSQL code formatter",
    },
  ];
};

export const links: LinksFunction = () => createLanguageManifest("tsql");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => sql({ dialect: MSSQL }), []);
  const isReady = useSqlFormatter({
    dialect: transactsql,
    keywordCase: "upper",
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
