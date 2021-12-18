import type { LinksFunction, MetaFunction } from "remix";
import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-json";
import "prismjs/components/prism-json5";
import parserBabel from "prettier/parser-babel";

import CodeEditor from "~/components/CodeEditor";

import stylesUrl from "~/styles/editor.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let meta: MetaFunction = () => {
  return {
    title: "JSON5 formatter",
  };
};

const Json5 = () => (
  <CodeEditor
    name="JSON5"
    prismLangName="json5"
    lang={languages.json5}
    options={{
      parser: "json5",
      plugins: [parserBabel],
    }}
  />
);

export default Json5;
