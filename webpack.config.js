//webpack.config.js 파일 추가후 main.js삭제후
//npx webpack --config webpack.config.js치면 main.js가 아래 설정하항에 의거하여 다시 생성됨
/*


package.json의 "script"부분에 "build": "webpack --config webpack.config.js"추가시
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js"
  },

npm run test 치면 콘솔에 "Error: no test specified\" && exit 1" 출력됨

터미널에서
npm run build하면
터미널에서 아래처럼 치는 것과 같다
npx webpack --config webpack.config.js



 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//남이 쓸 수 있게 배포
//1.entry포인트
//2.output
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ]
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]

};