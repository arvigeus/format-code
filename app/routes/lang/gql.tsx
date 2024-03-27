import pluginGraphql from "prettier/plugins/graphql";
import { StreamLanguage } from "@codemirror/language";
import { graphql } from "codemirror-graphql/cm6-legacy/mode";
import { useMemo } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import CodeEditor from "~/components/CodeEditor.client";
import { useFormatterOptions } from "~/routes/lang";
import usePrettier from "~/hooks/usePrettier";
import { createLanguageManifest } from "~/lib/meta";

export const meta: MetaFunction = () => {
  return {
    title: "GraphQL code formatter",
  };
};

export let links: LinksFunction = () => createLanguageManifest("gql");

export default function Code() {
  const { handleChange, code } = useFormatterOptions();
  const language = useMemo(() => StreamLanguage.define(graphql), []);
  const isReady = usePrettier({
    parser: "graphql",
    plugins: [pluginGraphql],
  });

  if (!isReady) return null;

  return (
    <CodeEditor value={code} language={language} onChange={handleChange} />
  );
}
