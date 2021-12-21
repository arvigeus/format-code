import { createCookieSessionStorage } from "remix";

// - https://remix.run/api/remix#createcookiesessionstorage
let { commitSession, destroySession, getSession } = createCookieSessionStorage({
  cookie: {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    secrets: [process.env.COOKIE_SECRET],
  },
});

export { commitSession, destroySession, getSession };
