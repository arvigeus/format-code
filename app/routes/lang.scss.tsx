import pluginPostcss from "prettier/plugins/postcss";
import { StreamLanguage } from "@codemirror/language";
import { sCSS } from "@codemirror/legacy-modes/mode/css";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return [
    {
      title: "SCSS code formatter",
    },
  ];
};

export const links: LinksFunction = () => createLanguageManifest("sass");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => StreamLanguage.define(sCSS), []);
  const isReady = usePrettier({
    parser: "scss",
    plugins: [pluginPostcss],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
