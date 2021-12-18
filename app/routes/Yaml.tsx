import type { LinksFunction, MetaFunction } from "remix";
import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-yaml";
import parserYaml from "prettier/parser-yaml";

import CodeEditor from "~/components/CodeEditor";

import stylesUrl from "~/styles/editor.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let meta: MetaFunction = () => {
  return {
    title: "CSS formatter",
  };
};

const Yaml = () => (
  <CodeEditor
    name="YAML"
    prismLangName="yaml"
    lang={languages.yaml}
    options={{
      parser: "yaml",
      plugins: [parserYaml],
    }}
  />
);

export default Yaml;
