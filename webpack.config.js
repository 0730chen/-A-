const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除dist
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [new HtmlWebpackPlugin({
        title: "哈哈",
        template: './src/index.html',
        favicon: './src/cat.png',
        filename: 'index.html'
    })],
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    }
}