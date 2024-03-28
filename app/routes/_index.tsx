import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import { createLanguageManifest } from "~/lib/meta";

import { SimplePanel } from "~/components/Panel";

import stylesUrl from "~/styles/home.css?url";

type HomeData = Array<{ path: string; name: string }>;

export const loader: LoaderFunction = () => {
  const data: HomeData = [
    { path: "/lang/css", name: "CSS" },
    { path: "/lang/gql", name: "GraphQL" },
    { path: "/lang/html", name: "HTML" },
    { path: "/lang/json", name: "JSON" },
    { path: "/lang/json5", name: "JSON5" },
    { path: "/lang/js", name: "JavaScript" },
    { path: "/lang/less", name: "LESS" },
    { path: "/lang/mariadb", name: "MariaDB" },
    { path: "/lang/md", name: "Markdown" },
    { path: "/lang/mdx", name: "MDX" },
    { path: "/lang/mysql", name: "MySQL" },
    { path: "/lang/plsql", name: "PL/SQL" },
    { path: "/lang/postgresql", name: "PostgreSQL" },
    { path: "/lang/jsx", name: "React" },
    { path: "/lang/tsx", name: "React TypeScript" },
    { path: "/lang/scss", name: "SCSS" },
    { path: "/lang/sql", name: "SQL" },
    { path: "/lang/tsql", name: "TSQL" },
    { path: "/lang/ts", name: "TypeScript" },
    { path: "/lang/xml", name: "XML" },
    { path: "/lang/yaml", name: "YAML" },
  ];

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return [
    {
      title: "Code formatter",
      description: "Easy and opinionated online code formatter",
    },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    ...createLanguageManifest("code"),
  ];
};

export default function Home() {
  const data = useLoaderData<HomeData>();
  const toggleTheme = useFetcher<Record<string, string>>();

  const reloadDocument = !!toggleTheme.data;

  return (
    <div id="home" style={toggleTheme.data}>
      <h4># Available formatters:</h4>
      <ul>
        {data.map(({ path, name }) => (
          <li key={name}>
            <Link to={path} reloadDocument={reloadDocument}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <toggleTheme.Form method="post" action="/toggleTheme">
        <SimplePanel busy={toggleTheme.state === "submitting"} />
      </toggleTheme.Form>
    </div>
  );
}
