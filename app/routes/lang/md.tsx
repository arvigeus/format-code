import parserMarkdown from "prettier/parser-markdown";
import { markdown } from "@codemirror/lang-markdown";
import { useMemo } from "react";
import { MetaFunction, LinksFunction } from "remix";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return {
    title: "Markdown code formatter",
  };
};

export let links: LinksFunction = () => createLanguageManifest("md");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => markdown(), []);
  const isReady = usePrettier({
    parser: "markdown",
    plugins: [parserMarkdown],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
