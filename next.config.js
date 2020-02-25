const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withFonts = require("next-fonts");

module.exports = withSass(withImages(withFonts({
    target: "serverless",
      exportPathMap: function() {
        return {
          "/": { page: "/" },
          "/poke/[name]": { page: "/poke/[name]" }
        };
      },
      webpack(config, options) {
        return config;
      }
})));