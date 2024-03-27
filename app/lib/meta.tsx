export const createLanguageManifest = (name: string) => [
  {
    key: "any",
    rel: "icon",
    href: `/favicons/${name}/favicon.ico`,
    sizes: "any",
  },
  {
    key: "16x16",
    rel: "icon",
    href: `/favicons/${name}/favicon.ico`,
    sizes: "16x16",
  },
  {
    key: "32x32",
    rel: "icon",
    href: `/favicons/${name}/favicon.ico-32x32`,
    sizes: "32x32",
  },
  {
    key: "manifest",
    rel: "manifest",
    href: `/meta/site.webmanifest?name=${name}`,
  },
  {
    key: "apple-touch-icon",
    rel: "apple-touch-icon",
    href: `/favicons/${name}/apple-touch-icon.png`,
  },
];
