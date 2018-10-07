const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  entry: './src/web/app.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[hash].app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.styl$/,
        use: [
          { loader: 'style-loader/url' },
          {
            loader: 'file-loader',
            options: {
              name: '[hash].css'
            }
          },
          { loader: 'stylus-loader' }
        ]
      },
      {
        test: /\.png$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/web/app.html')
    })
  ]
}
module.exports = config
