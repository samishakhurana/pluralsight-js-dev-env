// For dev webpack configuration

import path from "path";

export default {
  mode: "development", // because of dev mode it provides useful names to modules which helps us to debug
  devtool: "eval-source-map", // This option controls if and how source maps are generated
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "src"), // for dev mode, webpack won't create any new files. Files from this directory will be served through browser
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [],
  module: {
    rules: [ // we tell webpack how to handle diff file types
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] }, // Bundle our js using babel and ignore node modules
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
}
