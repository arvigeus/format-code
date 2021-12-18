import type { LinksFunction, MetaFunction } from "remix";
import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-css";
import "prismjs/components/prism-css-extras";
import "prismjs/components/prism-scss";
import parserPostcss from "prettier/parser-postcss";

import CodeEditor from "~/components/CodeEditor";

import stylesUrl from "~/styles/editor.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let meta: MetaFunction = () => {
  return {
    title: "Scss formatter",
  };
};

const Scss = () => (
  <CodeEditor
    name="Scss"
    prismLangName="scss"
    lang={languages.scss}
    options={{
      parser: "scss",
      plugins: [parserPostcss],
    }}
  />
);

export default Scss;
