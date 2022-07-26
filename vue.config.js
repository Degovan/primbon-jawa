const { defineConfig } = require("@vue/cli-service");
const SitemapPlugin = require("sitemap-webpack-plugin").default;

const paths = [
  {
    path: "/",
    lastmod: "2022-7-27",
    priority: 1.0,
    changefreq: "yearly",
  },
  {
    path: "/cek-weton",
    lastmod: "2022-7-27",
    priority: 0.9,
    changefreq: "yearly",
  },
  {
    path: "/translate-jawa",
    lastmod: "2022-7-27",
    priority: 0.9,
    changefreq: "yearly",
  },
  {
    path: "/kalender-jawa",
    lastmod: "2022-7-27",
    priority: 0.9,
    changefreq: "yearly",
  },
  {
    path: "/contact",
    lastmod: "2022-7-27",
    priority: 0.9,
    changefreq: "yearly",
  },
];

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new SitemapPlugin({ base: "https://primbonjawa.net", paths })],
  },
});
