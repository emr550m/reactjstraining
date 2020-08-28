var path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname,'./'),
       filename: 'bundle.js'
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