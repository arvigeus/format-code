import type { LoaderFunction } from "remix";

import type { ThemeVariant } from "~/themes";
import { editorColors } from "~/themes";
import { getSession } from "~/session.server";

export let loader: LoaderFunction = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));

  const variant: ThemeVariant = session.get("theme") || "light";
  const theme = editorColors[variant];

  let css = "";

  if (theme) {
    const properties = Object.entries(theme).map(
      ([property, color]) => `--color-editor-${property}: ${color};`
    );

    css = `:root {${properties.join("")}}`;
  }

  return new Response(css, {
    headers: {
      "Content-Type": "text/css",
    },
  });
};
