import pluginMarkdown from "prettier/plugins/markdown";
import { markdown } from "@codemirror/lang-markdown";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Markdown code formatter",
    },
  ];
};

export const links: LinksFunction = () => createLanguageManifest("md");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => markdown(), []);
  const isReady = usePrettier({
    parser: "markdown",
    plugins: [pluginMarkdown],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
