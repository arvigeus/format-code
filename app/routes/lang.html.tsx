import pluginHtml from "prettier/plugins/html";
import { html } from "@codemirror/lang-html";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return [
    {
      title: "HTML code formatter",
    },
  ];
};

export const links: LinksFunction = () => createLanguageManifest("html");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => html(), []);
  const isReady = usePrettier({
    parser: "html",
    plugins: [pluginHtml],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
