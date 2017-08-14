var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var htmlPlugin = require('html-webpack-plugin');
var inlineManifestPlugin = require('inline-manifest-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:{
    main:'./src/main.js',
    ventor:"moment"
  } ,
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        // use: 'style-loader!css-loader'//注意这两个loader是有顺序的
        use:ExtractTextPlugin.extract({fallback:"style-loader",use:["css-loader"]})
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
      new ExtractTextPlugin('style.[hash].css'),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: ['vendor', 'manifest'] , // 指定公共 bundle 的名字。
      //   minChunks: function (module) {
      //       // 该配置假定你引入的 vendor 存在于 node_modules 目录中
      //       return module.context && module.context.indexOf('node_modules') !== -1;
      //   }
      // }),
      // manifest 文件内容内联到 html 中
      new inlineManifestPlugin({
          name: 'webpackManifest'
      }),
      // html 生成
      new htmlPlugin({
          template: './index.html'
      }),
      new CleanWebpackPlugin(//每次build先清空dist文件夹，匹配删除的文件
          ['dist/main.*.js','dist/ventor.*.js','dist/style.*.css','dist/index.html'],
          {
              root: __dirname,//根目录
              verbose:  true,//开启在控制台输出信息
              dry:false //启用删除文件
          }
      )
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
