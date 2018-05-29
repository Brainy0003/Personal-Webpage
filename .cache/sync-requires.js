// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Users/Asjas/Documents/git/Personal-Webpage/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\.cache\\dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\src\\pages\\about.js")),
  "component---src-pages-contact-js": preferDefault(require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\src\\pages\\contact.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\src\\pages\\index.js")),
  "component---src-pages-portfolio-js": preferDefault(require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\src\\pages\\portfolio.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\.cache\\json\\layout-index.json"),
  "dev-404-page.json": require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\.cache\\json\\dev-404-page.json"),
  "404.json": require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\.cache\\json\\404.json"),
  "about.json": require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\.cache\\json\\about.json"),
  "contact.json": require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\.cache\\json\\contact.json"),
  "index.json": require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\.cache\\json\\index.json"),
  "portfolio.json": require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\.cache\\json\\portfolio.json"),
  "404-html.json": require("C:\\Users\\Asjas\\Documents\\git\\Personal-Webpage\\.cache\\json\\404-html.json")
}