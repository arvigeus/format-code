import parserYaml from "prettier/parser-yaml";
import { StreamLanguage } from "@codemirror/stream-parser";
import { yaml } from "@codemirror/legacy-modes/mode/yaml";
import { useMemo } from "react";
import { MetaFunction, LinksFunction } from "remix";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return {
    title: "XML code formatter",
  };
};

export let links: LinksFunction = () => createLanguageManifest("yaml");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => StreamLanguage.define(yaml), []);
  const isReady = usePrettier({
    parser: "yaml",
    plugins: [parserYaml],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
