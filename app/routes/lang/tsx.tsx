import parserBabel from "prettier/parser-babel";
import { javascript } from "@codemirror/lang-javascript";
import { useMemo } from "react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return {
    title: "TSX code formatter",
  };
};

export let links: LinksFunction = () => createLanguageManifest("tsx");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(
    () => javascript({ jsx: true, typescript: true }),
    []
  );
  const isReady = usePrettier({
    parser: "babel",
    plugins: [parserBabel],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
