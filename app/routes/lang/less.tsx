import parserPostcss from "prettier/parser-postcss";
import { StreamLanguage } from "@codemirror/language";
import { less } from "@codemirror/legacy-modes/mode/css";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return {
    title: "LESS code formatter",
  };
};

export let links: LinksFunction = () => createLanguageManifest("less");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => StreamLanguage.define(less), []);
  const isReady = usePrettier({
    parser: "less",
    plugins: [parserPostcss],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
