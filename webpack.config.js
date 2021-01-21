const path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:{
        index:"./src/index.js"
    },
    output:{
        filename:"[name].js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9999,
        compress: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:"index.html"
        })
    ]
}