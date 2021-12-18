import type { LinksFunction, MetaFunction } from "remix";
import { languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-graphql";
import parserGraphql from "prettier/parser-graphql";

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

const Graphql = () => (
  <CodeEditor
    name="GraphQL"
    prismLangName="graphql"
    lang={languages.graphql}
    options={{
      parser: "graphql",
      plugins: [parserGraphql],
    }}
  />
);

export default Graphql;
