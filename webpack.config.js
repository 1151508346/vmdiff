const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"development",
    entry: {
        index:"./src/index.js"
    },
    output:{
        path: path.join(__dirname,'dist'),
        filename:"[name].js"
    },
    devServer: {
        contentBase:path.join(__dirname,"./"),
        port: 9999,
        compress: true,
    },
    devtool: "source-map",
    plugins:[
       new HtmlWebpackPlugin({
           filename: 'index.html',
           template: './index.html',
           // true | "‘head’" | ‘body’ | false。 把所有产出文件注入到给定的 template 或templateContent。 当传入 true或者‘ body’ 时所有javascript资源将被放置在body元素的底部，“ head” 则会放在head元素内。
           inject: "body",
           // chunks:[]
       }),
    ]
}