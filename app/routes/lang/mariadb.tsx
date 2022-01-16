import { sql, MariaSQL } from "@codemirror/lang-sql";
import { useMemo } from "react";
import { MetaFunction, LinksFunction } from "remix";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import useSqlFormatter from "~/hooks/useSqlFormatter";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return {
    title: "MariaDB code formatter",
  };
};

export let links: LinksFunction = () => createLanguageManifest("mariadb");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => sql({ dialect: MariaSQL }), []);
  const isReady = useSqlFormatter({
    language: "mariadb",
    uppercase: true,
    linesBetweenQueries: 2,
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
