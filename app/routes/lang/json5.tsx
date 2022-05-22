import parserBabel from "prettier/parser-babel";
import { json } from "@codemirror/lang-json";
import { useMemo } from "react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return {
    title: "JSON5 code formatter",
  };
};

export let links: LinksFunction = () => createLanguageManifest("json5");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => json(), []);
  const isReady = usePrettier({
    parser: "json5",
    plugins: [parserBabel],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
