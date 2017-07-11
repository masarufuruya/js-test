var webpack = require('webpack')

module.exports = [
  {
    entry: {
	'application': [
          //ページ単位のJSを読み込む
	  //依存関係はページ単位JS内でES6モジュールのimportを利用
          './src/dashboard.js',
	  './src/evaluations.js'
        ]
    },
    devtool: 'source-map',
    output: {
      path: __dirname + '/dist',
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    //ランタイムビルド設定
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [
            "node_modules"
        ],
        alias: {
            vue: 'vue/dist/vue.common.js'
        }
    },
  }
]

