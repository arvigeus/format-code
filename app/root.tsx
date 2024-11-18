import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStylesUrl from "~/styles/global.css?url";
import panelStylesUrl from "~/styles/panel.css?url";

// https://remix.run/api/app#links
export const links = () => [
  {
    rel: "stylesheet",
    href: "/styles/theme.css",
  },
  { rel: "stylesheet", href: globalStylesUrl },
  { rel: "stylesheet", href: panelStylesUrl },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
