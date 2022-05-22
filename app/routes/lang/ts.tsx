import parserTs from "prettier/parser-typescript";
import { javascript } from "@codemirror/lang-javascript";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return {
    title: "TypeScript code formatter",
  };
};

export let links: LinksFunction = () => createLanguageManifest("ts");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => javascript({ typescript: true }), []);
  const isReady = usePrettier({
    parser: "typescript",
    plugins: [parserTs],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
