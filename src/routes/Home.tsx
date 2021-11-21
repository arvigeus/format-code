import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import SimplePanel from "../components/SimplePanel";

export default function Home() {
  return (
    <div
      id="home"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "15px",
      }}
    >
      <Helmet>
        <title>Code formatter</title>
      </Helmet>
      <SimplePanel />
      <h4># Available formatters:</h4>
      <ul>
        <li>
          <Link to="/css">CSS</Link>
        </li>
        <li>
          <Link to="/gql">GraphQL</Link>
        </li>
        <li>
          <Link to="/html">HTML</Link>
        </li>
        <li>
          <Link to="/json">JSON</Link>
        </li>
        <li>
          <Link to="/json5">JSON5</Link>
        </li>
        <li>
          <Link to="/js">JavaScript</Link>
        </li>
        <li>
          <Link to="/less">LESS</Link>
        </li>
        <li>
          <Link to="/mariadb">MariaDB</Link>
        </li>
        <li>
          <Link to="/md">Markdown</Link>
        </li>
        <li>
          <Link to="/mdx">MDX</Link>
        </li>
        <li>
          <Link to="/mysql">MySQL</Link>
        </li>
        <li>
          <Link to="/plsql">PL/SQL</Link>
        </li>
        <li>
          <Link to="/postgresql">PostgreSQL</Link>
        </li>
        <li>
          <Link to="/jsx">React</Link>
        </li>
        <li>
          <Link to="/tsx">React TypeScript</Link>
        </li>
        <li>
          <Link to="/scss">SCSS</Link>
        </li>
        <li>
          <Link to="/sql">SQL</Link>
        </li>
        <li>
          <Link to="/tsql">TSQL</Link>
        </li>
        <li>
          <Link to="/ts">TypeScript</Link>
        </li>
        <li>
          <Link to="/xml">XML</Link>
        </li>
        <li>
          <Link to="/yaml">YAML</Link>
        </li>
      </ul>
    </div>
  );
}
