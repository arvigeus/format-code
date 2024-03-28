import { sql } from "@codemirror/lang-sql";
import { sql as sqlDialect } from "sql-formatter";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import useSqlFormatter from "~/hooks/useSqlFormatter";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return [
    {
      title: "SQL code formatter",
    },
  ];
};

export const links: LinksFunction = () => createLanguageManifest("sql");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => sql(), []);
  const isReady = useSqlFormatter({
    dialect: sqlDialect,
    keywordCase: "upper",
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
