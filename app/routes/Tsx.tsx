import type { LinksFunction, MetaFunction } from "remix";
import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-regex";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javadoclike";
import "prismjs/components/prism-js-templates";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsdoc";
import "prismjs/components/prism-js-extras";
import "prismjs/components/prism-js-templates";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import parserBabel from "prettier/parser-babel";

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

const JavaScript = () => (
  <CodeEditor
    name="React TypeScript"
    prismLangName="tsx"
    lang={languages.tsx}
    options={{
      parser: "babel",
      plugins: [parserBabel],
    }}
  />
);

export default JavaScript;
