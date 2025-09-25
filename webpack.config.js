const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDev ? '[name].js' : '[name].[contenthash].js',
    clean: true,
    publicPath: '/'
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-cheap-module-source-map' : false,

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              parser: { syntax: 'ecmascript', jsx: true },
              transform: {
                react: {
                  runtime: 'automatic',
                  development: isDev,
                  refresh: isDev
                }
              },
              target: 'esnext'
            }
            // NOTE: anything not specified here (like env.targets) still comes from .swcrc
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: { extensions: ['.js', '.jsx', '.json'] },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    ...(isDev ? [new ReactRefreshWebpackPlugin()] : [])
  ],

  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: {
      app: { name: 'Google Chrome' }
    },
    hot: true,
    client: { overlay: true }
  },

  optimization: {
    splitChunks: { chunks: 'all' },
    runtimeChunk: 'single'
  }
};
