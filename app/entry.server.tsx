import { renderToString } from "react-dom/server";
import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";

if (!process.env.COOKIE_SECRET)
  throw new Error("Missing `COOKIE_SECRET` environment variable");

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
