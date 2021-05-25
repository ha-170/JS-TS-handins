const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/*
module.exports = {
    entry: { index: path.resolve(__dirname, "source", "index.js") }
};

module.exports = {
    output: {
        path: path.resolve(__dirname, "build")
    }
};
*/
module.exports = {
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
};