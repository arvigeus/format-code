import type { LinksFunction, MetaFunction } from "remix";
import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-css";
import "prismjs/components/prism-css-extras";
import "prismjs/components/prism-less";
import parserPostcss from "prettier/parser-postcss";

import CodeEditor from "~/components/CodeEditor";

import stylesUrl from "~/styles/editor.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let meta: MetaFunction = () => {
  return {
    title: "LESS formatter",
  };
};

const CSS = () => (
  <CodeEditor
    name="LESS"
    prismLangName="less"
    lang={languages.less}
    options={{
      parser: "less",
      plugins: [parserPostcss],
    }}
  />
);

export default CSS;
