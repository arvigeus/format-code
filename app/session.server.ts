import { createCookieSessionStorage } from "@remix-run/node";

// - https://remix.run/api/remix#createcookiesessionstorage
const { commitSession, destroySession, getSession } =
  createCookieSessionStorage({
    cookie: {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      secrets: [process.env.COOKIE_SECRET],
      maxAge: Number.MAX_SAFE_INTEGER,
    },
  });

export { commitSession, destroySession, getSession };
