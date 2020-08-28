var path = require('path');

module.exports = {

    entry: './src/index-hot.js',
    output: {
        path : path.resolve(__dirname,'./'),
       filename: 'bundle.js'
    },
    resolve:{
      alias: { 'react-dom': '@hot-loader/react-dom'  },
  },
    mode:'development',
    devtool:"source-map",
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      }

}