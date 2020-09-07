const pluginPingendo = require("pingendo-11ty");


module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginPingendo);
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setDynamicPermalinks(true);
  eleventyConfig.setTemplateFormats([
    "md",
    "js",
    "html",
    "yml",
    "jpg",
    "css" // css is not yet a recognized template extension in Eleventy
  ]);

  return {
    templateFormats: [
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
      input: "src",
      output: "build",
      data: "../data" // ⚠️ This value is relative to your input directory.
    }
  };

};