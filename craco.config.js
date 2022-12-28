const path = require('path');
const resolve = pathname => path.resolve(__dirname, pathname);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "assets": resolve("src/assets"),
      "pages": resolve("src/pages"),
      "components": resolve("src/components"),
      "hooks": resolve("src/hooks"),
      "base-ui": resolve("src/base-ui"),
      "utils": resolve("src/utils"),
      "store": resolve("src/store"),
      "service": resolve("src/service")
    }
  }
};
