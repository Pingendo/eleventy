const pluginPingendo = require("pingendo-11ty");


module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginPingendo);
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setDynamicPermalinks(true);
  eleventyConfig.setTemplateFormats([
    "ejs",
    "md",
    "js",
    "html",
    "yml",
    "jpg",
    "css" // css is not yet a recognized template extension in Eleventy
  ]);

  return {
    templateFormats: [
      "ejs",
      "md",
      "njk",
      "html",
      "liquid",
    ],
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };

};