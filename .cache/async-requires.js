// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/home/asjas/git/Personal-Webpage/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/home/asjas/git/Personal-Webpage/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/asjas/git/Personal-Webpage/src/pages/index.js"),
  "component---src-pages-page-2-js": require("gatsby-module-loader?name=component---src-pages-page-2-js!/home/asjas/git/Personal-Webpage/src/pages/page-2.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/asjas/git/Personal-Webpage/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/home/asjas/git/Personal-Webpage/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/home/asjas/git/Personal-Webpage/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/asjas/git/Personal-Webpage/.cache/json/index.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/home/asjas/git/Personal-Webpage/.cache/json/page-2.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/home/asjas/git/Personal-Webpage/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/asjas/git/Personal-Webpage/.cache/layouts/index.js")
}