import type { LoaderFunction } from "remix";

import type { ThemeVariant } from "~/themes";
import { themeColors } from "~/themes";
import { getSession } from "~/session.server";

export let loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const url = new URL(request.url);

  const variant: ThemeVariant = session.get("theme") || "light";
  const theme = themeColors[variant];

  const name = url.searchParams.get("name") || "code";

  const manifest = {
    name: name,
    short_name: name,
    icons: [
      {
        src: `/favicons/${name}/android-chrome-192x192.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `/favicons/${name}/android-chrome-512x512.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: theme.foreground,
    background_color: theme.background,
    display: "standalone",
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      "Content-Type": "text/webmanifest",
    },
  });
};
