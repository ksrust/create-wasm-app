const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html']),
   // Have this example work in Edge which doesn't ship `TextEncoder` or `TextDecoder` at this time.
 ],
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
  }
};
