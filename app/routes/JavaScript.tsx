import type { LinksFunction, MetaFunction } from "remix";
import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-regex";
import "prismjs/components/prism-javascript";
import parserBabel from "prettier/parser-babel";

import CodeEditor from "~/components/CodeEditor";

import stylesUrl from "~/styles/editor.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let meta: MetaFunction = () => {
  return {
    title: "JavaScript formatter",
  };
};

const JavaScript = () => (
  <CodeEditor
    name="JavaScript"
    prismLangName="js"
    lang={languages.js}
    options={{
      parser: "babel",
      plugins: [parserBabel],
    }}
  />
);

export default JavaScript;
