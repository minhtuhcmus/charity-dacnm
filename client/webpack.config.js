const path = require("path");
const webpack = require("webpack")
const dotenv = require('dotenv')
process.env.NODE_ENV = 'development'
module.exports = () => {
  const env = dotenv.config().parsed
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {})
  return {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
          ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 10000
              }
            }
          ]
        }
      ]
    },
    resolve: { 
      extensions: ["*", ".js", ".jsx"],
      alias: {
        _utils: path.resolve(__dirname, 'src/utils'),
        _components: path.resolve(__dirname, 'src/components'),
        _pages: path.resolve(__dirname, 'src/pages'),
        _configs: path.resolve(__dirname, 'src/configs'),
        _constants: path.resolve(__dirname, 'src/constants'),
        _api: path.resolve(__dirname, 'src/api'),
        _src: path.resolve(__dirname, 'src'),
        _helpers: path.resolve(__dirname, 'src/utils/helpers'),
        _layout: path.resolve(__dirname, 'src/layout'),
        _router: path.resolve(__dirname, 'src/router'),
        _styles: path.resolve(__dirname, 'src/styles'),
        _static: path.resolve(__dirname, 'public/static'),
        _store: path.resolve(__dirname, 'src/store')
      }
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      host: '127.0.0.1',
      port: 3000,
      hot: true,
      open: true,
      quiet: true,
      inline: true,
      compress: true,
      watchContentBase: true,
      disableHostCheck: true,
      historyApiFallback: true,
      publicPath: "http://localhost:3000/dist/"
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin(envKeys)
    ]
  }  
};