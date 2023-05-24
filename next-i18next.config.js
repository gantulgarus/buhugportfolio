const path = require("path");

module.exports = {
  i18n: {
    locales: ["mn", "us"],
    defaultLocale: "mn",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};
