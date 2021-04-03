//モジュールの指定
//pathは初期モジュールとしてもとから入っているのでrequireを使って入れることができる
const path = require('path');
//webpackの設定の中身の宣言
module.export = {
//entry point:webpackのmoduleのbundleを行うための起点になるファイルをまとめていく
  entry:{
//entry pointにbundleという名前をつけて、そのファイル名を指定
    main:'./src/index.ts'
  },
//outputはbundleで一つにまとめたファイルをどこに出力するか設定値を書いたファイル
  output: {
//上で設定したpathという設定値を使う。__dirname：これがある環境のpathを取得してくれる
　　　path: path.join(__dirname, 'dist'),
//nameはbundleと紐づくので、bundle.jsとなる
     filename: "[name].js"
  },
//resolveは、importとexportの時の名前解決の際の拡張子を書く必要がなくなる。この場合、.jsと.tsは書かなくてもよくなる
  resolve: {
    extentions: ['.ts', '.js']
  },
//開発用サーバの設定を書いていく
  devServer: {
//local環境で開発しているときにwebpackdevserver（ローカルサーバ）が参照するディレクトリ
    contentBase: path.join(__dirname, 'dist'),
//ローカルのWebサーバを立ち上げたときにブラウザを勝手に立ち上げる
    open:true
  },
  module: {
    rules: [
      {
//ファイル名の最後が.tsで終わるファイルをコンパイルするという意味
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}