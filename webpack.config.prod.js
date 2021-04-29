import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: "production", // tells webpack to minify the code and sets node env variable to production
  devtool: "source-map", // This option controls if and how source maps are generated
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"), // dist - distribution
    publicPath: "/",
    filename: "[name].[chunkhash].js" // chunkhash is for cache busting
    // filename: "bundle.js", // It can not be hardcoded now since we are splitting the bundle
  },
  plugins: [
    // generate an external css file with a hash in the filename
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css"
    }),

    // creates html file that includesreference to bundled JS
    new HtmlWebpackPlugin({
      template: "src/index.html",
      // Properties defined here will be availabe in our index.html file using htmlWebpackPlugin.options.varName
      trackJSToken: "---", // Using this and EJS we can set up track js script files in our index.html conditionally just for PROD- not coded
    })
  ],
  module: {
    rules: [ // we tell webpack how to handle diff file types
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] }, // Bundle our js using babel and ignore node modules
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
}
