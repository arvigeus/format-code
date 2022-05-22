import parserMarkdown from "prettier/parser-markdown";
import { markdown } from "@codemirror/lang-markdown";
import { useMemo } from "react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return {
    title: "MDX code formatter",
  };
};

export let links: LinksFunction = () => createLanguageManifest("mdx");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => markdown(), []);
  const isReady = usePrettier({
    parser: "mdx",
    plugins: [parserMarkdown],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
