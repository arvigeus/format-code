import pluginXml from "@prettier/plugin-xml";
import { xml } from "@codemirror/lang-xml";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return [
    {
      title: "XML code formatter",
    },
  ];
};

export const links: LinksFunction = () => createLanguageManifest("xml");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => xml(), []);
  const isReady = usePrettier({
    parser: "xml",
    plugins: [pluginXml],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
