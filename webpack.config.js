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
          {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                },
                {
                    loader: 'file-loader?name=./assets/fonts/Roboto/[name].[ext]'
                }
            ]
        }
        ],
      },
      devServer: {
        contentBase: './dist',
        open: true,
        port: 3000
      },
}