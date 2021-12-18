import type { LinksFunction, MetaFunction } from "remix";
import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-markup";
import parserXml from "@prettier/plugin-xml";

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

const Html = () => (
  <CodeEditor
    name="XXL"
    prismLangName="markup"
    lang={languages.markup}
    options={{
      parser: "xml",
      plugins: [parserXml],
    }}
  />
);

export default Html;
