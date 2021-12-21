import { sql, PLSQL } from "@codemirror/lang-sql";
import { useMemo } from "react";
import { MetaFunction, LinksFunction } from "remix";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import useSqlFormatter from "~/hooks/useSqlFormatter";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return {
    title: "PL/SQL code formatter",
  };
};

export let links: LinksFunction = () => createLanguageManifest("plsql");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => sql({ dialect: PLSQL }), []);
  const isReady = useSqlFormatter({
    language: "plsql",
    uppercase: true,
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
