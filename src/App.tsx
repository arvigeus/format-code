import { lazy, Suspense, MouseEventHandler } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import useDarkTheme, { ThemeContext } from "./hooks/useDarkMode";
import { getMessage } from "./utils/messages";

const Home = lazy(() => import("./routes/Home"));
const Sql = lazy(() => import("./routes/Sql"));
const Mariadb = lazy(() => import("./routes/Mariadb"));
const Mysql = lazy(() => import("./routes/Mysql"));
const Plsql = lazy(() => import("./routes/Plsql"));
const Postgresql = lazy(() => import("./routes/Postgresql"));
const TSql = lazy(() => import("./routes/Tsql"));
const JavaScript = lazy(() => import("./routes/JavaScript"));
const Css = lazy(() => import("./routes/Css"));
const Json = lazy(() => import("./routes/Json"));
const Json5 = lazy(() => import("./routes/Json5"));
const Graphql = lazy(() => import("./routes/Graphql"));
const Html = lazy(() => import("./routes/Html"));
const Markdown = lazy(() => import("./routes/Markdown"));
const Mdx = lazy(() => import("./routes/Mdx"));
const TypeScript = lazy(() => import("./routes/TypeScript"));
const Yaml = lazy(() => import("./routes/Yaml"));
const Jsx = lazy(() => import("./routes/Jsx"));
const Tsx = lazy(() => import("./routes/Tsx"));
const Less = lazy(() => import("./routes/Less"));
const Scss = lazy(() => import("./routes/Scss"));
const Xml = lazy(() => import("./routes/Xml"));

export default function App() {
  const [theme, toggleTheme] = useDarkTheme();
  return (
    <ThemeContext.Provider value={toggleTheme}>
      <Helmet>
        <meta name="description" content="Format your code" />
        <link
          rel="stylesheet"
          type="text/css"
          href={`${process.env.PUBLIC_URL}/style/prism-material-${theme}.min.css`}
        />
      </Helmet>
      <main className={theme} onClick={mainHandler}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/sql" element={<Sql />}></Route>
            <Route path="/mariadb" element={<Mariadb />}></Route>
            <Route path="/mysql" element={<Mysql />}></Route>
            <Route path="/plsql" element={<Plsql />}></Route>
            <Route path="/postgresql" element={<Postgresql />}></Route>
            <Route path="/tsql" element={<TSql />}></Route>
            <Route path="/js" element={<JavaScript />}></Route>
            <Route path="/javascript" element={<JavaScript />}></Route>
            <Route path="/css" element={<Css />}></Route>
            <Route path="/json" element={<Json />}></Route>
            <Route path="/json5" element={<Json5 />}></Route>
            <Route path="/gql" element={<Graphql />}></Route>
            <Route path="/graphql" element={<Graphql />}></Route>
            <Route path="/html" element={<Html />}></Route>
            <Route path="/md" element={<Markdown />}></Route>
            <Route path="/markdown" element={<Markdown />}></Route>
            <Route path="/mdx" element={<Mdx />}></Route>
            <Route path="/ts" element={<TypeScript />}></Route>
            <Route path="/typescript" element={<TypeScript />}></Route>
            <Route path="/yaml" element={<Yaml />}></Route>
            <Route path="/jsx" element={<Jsx />}></Route>
            <Route path="/tsx" element={<Tsx />}></Route>
            <Route path="/react" element={<Tsx />}></Route>
            <Route path="/less" element={<Less />}></Route>
            <Route path="/scss" element={<Scss />}></Route>
            <Route path="/xml" element={<Xml />}></Route>
          </Routes>
        </Suspense>
      </main>
    </ThemeContext.Provider>
  );
}

const mainHandler: MouseEventHandler<HTMLElement> = (evt) => {
  const element = evt.target as HTMLElement;
  if (element.tagName === "MAIN") {
    var codeArea = document.getElementById("codeArea");
    if (!codeArea) return;
    codeArea.focus();
    const textarea = codeArea as HTMLTextAreaElement;
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }
};

const Loader = () => (
  <div id="loading">
    <p>{getMessage()}</p>
    <p>Press any key to contunue...</p>
  </div>
);
