// https://www.ebey.me/blog/dynamic-css-with-remix-resource-routes
import type { ActionFunction } from "@remix-run/node";

import { json } from "@remix-run/node";

import type { ThemeVariant } from "~/themes";
import { editorColors, themeColors } from "~/themes";
import { getSession, commitSession } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const variant: ThemeVariant =
    session.get("theme") === "dark" ? "light" : "dark";

  session.set("theme", variant);

  const theme = themeColors[variant];
  const editorTheme = editorColors[variant];

  const css: Record<string, string> = {};

  if (theme) {
    for (const [prop, value] of Object.entries(theme))
      css[`--color-${prop}`] = value;
  }

  if (editorTheme) {
    for (const [prop, value] of Object.entries(editorTheme))
      css[`--color-editor-${prop}`] = value;
  }

  css["minHeight"] = "100vh";
  css["backgroundColor"] = "var(--color-background)";
  css["color"] = "var(--color-foreground)";

  return json(css, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};
