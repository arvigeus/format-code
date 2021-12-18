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
    title: "JSON formatter",
  };
};

const Json = () => (
  <CodeEditor
    name="JSON"
    prismLangName="json5"
    lang={languages.json5}
    options={{
      parser: "json",
      plugins: [parserBabel],
    }}
  />
);

export default Json;
