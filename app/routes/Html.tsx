import type { LinksFunction, MetaFunction } from "remix";
import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-markup";
import parserHtml from "prettier/parser-html";

import CodeEditor from "~/components/CodeEditor";

import stylesUrl from "~/styles/editor.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let meta: MetaFunction = () => {
  return {
    title: "Html formatter",
  };
};

const Html = () => (
  <CodeEditor
    name="Html"
    prismLangName="markup"
    lang={languages.markup}
    options={{
      parser: "html",
      plugins: [parserHtml],
    }}
  />
);

export default Html;
