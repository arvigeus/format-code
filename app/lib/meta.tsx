export const createLanguageManifest = (name: string) => [
  {
    rel: "icon",
    href: `/favicons/${name}/favicon.ico`,
    sizes: "any",
  },
  {
    rel: "icon",
    href: `/favicons/${name}/favicon.ico`,
    sizes: "16x16",
  },
  {
    rel: "icon",
    href: `/favicons/${name}/favicon.ico-32x32`,
    sizes: "32x32",
  },
  {
    rel: "manifest",
    href: `/meta/site.webmanifest?name=${name}`,
  },
  {
    rel: "apple-touch-icon",
    href: `/favicons/${name}/apple-touch-icon.png`,
  },
];
