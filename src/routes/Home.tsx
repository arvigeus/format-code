import { Link } from "react-router-dom";

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
          <Link to="/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/js">JavaScript</Link>
        </li>
        <li>
          <Link to="/less">LESS</Link>
        </li>
        <li>
          <Link to="/mdx">MDX</Link>
        </li>
        <li>
          <Link to="/md">Markdown</Link>
        </li>
        <li>
          <Link to="/scss">SCSS</Link>
        </li>
        <li>
          <Link to="/sql">SQL</Link>
        </li>
        <li>
          <Link to="/tsx">TSX</Link>
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
