import { sql, MySQL } from "@codemirror/lang-sql";
import { useMemo } from "react";
import { MetaFunction, LinksFunction } from "remix";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import useSqlFormatter from "~/hooks/useSqlFormatter";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return {
    title: "MySQL code formatter",
  };
};

export let links: LinksFunction = () => createLanguageManifest("mysql");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => sql({ dialect: MySQL }), []);
  const isReady = useSqlFormatter({
    language: "mysql",
    uppercase: true,
    linesBetweenQueries: 2,
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
