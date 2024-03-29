import pluginPostcss from "prettier/plugins/postcss";
import { css } from "@codemirror/lang-css";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang.js";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return [
    {
      title: "CSS code formatter",
    },
  ];
};

export const links: LinksFunction = () => createLanguageManifest("css");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => css(), []);
  const isReady = usePrettier({
    parser: "css",
    plugins: [pluginPostcss],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
