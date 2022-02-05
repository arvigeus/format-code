module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-preset-env"),
    ...(process.env.NODE_ENV === "production"
      ? [require("postcss-import"), require("postcss-minify")]
      : []),
  ],
};
