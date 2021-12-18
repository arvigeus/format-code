import type { MetaFunction, LoaderFunction, LinksFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

import stylesUrl from "~/styles/home.css";

type HomeData = Array<{ path: string; name: string }>;

export let loader: LoaderFunction = () => {
  let data: HomeData = [
    { path: "/css", name: "CSS" },
    { path: "/gql", name: "GraphQL" },
    { path: "/html", name: "HTML" },
    { path: "/json", name: "JSON" },
    { path: "/json5", name: "JSON5" },
    { path: "/js", name: "JavaScript" },
    { path: "/less", name: "LESS" },
    { path: "/mariadb", name: "MariaDB" },
    { path: "/md", name: "Markdown" },
    { path: "/mdx", name: "MDX" },
    { path: "/mysql", name: "MySQL" },
    { path: "/plsql", name: "PL/SQL" },
    { path: "/postgresql", name: "PostgreSQL" },
    { path: "/jsx", name: "React" },
    { path: "/tsx", name: "React TypeScript" },
    { path: "/scss", name: "SCSS" },
    { path: "/sql", name: "SQL" },
    { path: "/tsql", name: "TSQL" },
    { path: "/ts", name: "TypeScript" },
    { path: "/xml", name: "XML" },
    { path: "/yaml", name: "YAML" },
  ];

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Code formatter",
    description: "Easy an opinionated online code formatter",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Home() {
  let data = useLoaderData<HomeData>();

  return (
    <div id="home">
      <h4># Available formatters:</h4>
      <ul>
        {data.map(({ path, name }) => (
          <li key={name}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
