const path = require("path");

module.exports = {
  entry: ["./src/app.js"],
  output: {
    filename: "bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use:"babel-loader",
        exclude: "/node_modules/" //added quotes
      }
    ],
  },
  mode: 'production'
};