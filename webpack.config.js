const path = require('path');
module.exports = {
  target: "web",
  mode: "production",
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "as-sha256.min.js",
  },
  node: {
    fs: "empty"
  },
  devtool: 'inline-source-map',
}