const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    mainFields: [
      // `module` excluded because we must support IE11
      // uncomment `module` and the editor can be loaded
      // 'module',
      'browser',
      'jsnext:main',
      'main'
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8"/>
          <title>PhotoEditorSDK Example App</title>
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    `
  })],
};