import type { LinksFunction, MetaFunction } from "remix";
import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-css";
import parserPostcss from "prettier/parser-postcss";

import CodeEditor from "~/components/CodeEditor";

import stylesUrl from "~/styles/editor.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let meta: MetaFunction = () => {
  return {
    title: "GraphQL formatter",
  };
};

const Css = () => (
  <CodeEditor
    name="CSS"
    prismLangName="css"
    lang={languages.css}
    options={{
      parser: "css",
      plugins: [parserPostcss],
    }}
  />
);

export default Css;
