const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    context: __dirname,
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
          }),
          new CleanWebpackPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader","sass-loader"],
          },
        ],
      },
      devServer: {
        contentBase: './dist',
        open: true,
        port: 3000
      },
}