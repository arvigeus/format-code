import type { LoaderFunction } from "@remix-run/node";

import type { ThemeVariant } from "~/themes";
import { themeColors } from "~/themes";
import { getSession } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  const variant: ThemeVariant = session.get("theme") || "light";
  const theme = themeColors[variant];

  let css = "";

  if (theme) {
    const properties = Object.entries(theme).map(
      ([property, color]) => `--color-${property}: ${color};`,
    );

    css = `:root {${properties.join("")}}`;
  }

  return new Response(css, {
    headers: {
      "Content-Type": "text/css",
    },
  });
};
