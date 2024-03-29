import pluginBabel from "prettier/plugins/babel";
import pluginEstree from "prettier/plugins/estree";
import { json } from "@codemirror/lang-json";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return [
    {
      title: "JSON5 code formatter",
    },
  ];
};

export const links: LinksFunction = () => createLanguageManifest("json5");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => json(), []);
  const isReady = usePrettier({
    parser: "json5",
    plugins: [pluginBabel, pluginEstree],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
