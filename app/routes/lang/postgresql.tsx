import { sql, PostgreSQL } from "@codemirror/lang-sql";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import useSqlFormatter from "~/hooks/useSqlFormatter";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return {
    title: "PostgreSQL code formatter",
  };
};

export let links: LinksFunction = () => createLanguageManifest("postgresql");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => sql({ dialect: PostgreSQL }), []);
  const isReady = useSqlFormatter({
    language: "postgresql",
    keywordCase: "upper",
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
