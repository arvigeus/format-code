import pluginYaml from "prettier/plugins/yaml";
import { StreamLanguage } from "@codemirror/language";
import { yaml } from "@codemirror/legacy-modes/mode/yaml";
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

export const links: LinksFunction = () => createLanguageManifest("yaml");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => StreamLanguage.define(yaml), []);
  const isReady = usePrettier({
    parser: "yaml",
    plugins: [pluginYaml],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
