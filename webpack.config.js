const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const tsconfig = require('./tsconfig.json');

var alias = {};
for (var key in tsconfig.paths) {
  alias[key] =  path.resolve(__dirname, tsconfig.paths[key][0]);
}

module.exports = {
  mode: 'development',
  entry: [
    './src/extend.ts',
    './src/index.tsx',
    './src/content/less/main.less'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: /node_modules/ },
      { test: /\.less$/, use:[{
        loader: 'file-loader',
        options: { name: "style.css" },
      }, 'less-loader'] },
      { test: /\.html$/, use: 'raw-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
        {from:'index.html',to:'index.html'} 
    ])
  ],
  externals: {
    // "react": "React",
    // "react-dom": "ReactDOM"
  },
  resolve: {
    modules: ['src', 'tools', 'node_modules'],
    alias: alias,
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000,
    historyApiFallback: {
      index: 'index.html'
    },
    before: function(app) {
      app.use(function (req, res, next) {
        if (req.url.startsWith('/Images')) {
          req.url = "/src/content/" + req.url;
        }
        next();
      });  
    },
    after: function(app) {
      app.use(function (req, res, next) {
        if (req.url.endsWith('.css')) {
          res.setHeader('Content-Type', 'text/css');
        }
        next();
      });  
    }
  }
};