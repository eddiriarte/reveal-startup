const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin =  require('copy-webpack-plugin');

const entry = './src/js/index.js';

const output = {
  filename: 'main.js',
  path: path.resolve(__dirname, 'dist')
};

const devtool = 'source-map';
  
const devServer = {
  contentBase: './dist',
  port: 3000
};

const plugins = [
  new HtmlWebPackPlugin({
    template: "./src/templates/index.html",
    filename: "./index.html"
  }),
  new CopyWebpackPlugin([ 
    {
      from: 'src/slides/**/*',
      to: 'slides/',
      flatten: true
    },
    {
      from: 'src/media/**/*',
      to: 'media/',
      flatten: true
    }
  ])
];

const stylesheetsRule = {
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
};

const imagesRule = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    'file-loader'
  ]
};

const fontsRule = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    'file-loader'
  ]
};

const htmlTemplatesRule = {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader",
      options: { minimize: true }
    }
  ]
};

const importsLoaderRule = {
  test: /vendor\/.+\.js$/,
  loader: 'imports?jQuery=jquery,$=jquery,this=>window'
};

module.exports = {
  entry,

  output,
  
  devtool,
  
  devServer,
  
  mode: 'development',
  
  module: {
    rules: [
      stylesheetsRule,
      imagesRule,
      fontsRule,
      htmlTemplatesRule,
      importsLoaderRule
    ]
  },

  plugins

};