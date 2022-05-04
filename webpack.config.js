const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(__dirname);
module.exports = {
    entry: './src/main.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Todo App bundled with webpack',
            template: './src/index.html',
            scriptLoading: 'blocking',
        }),
    ],
    devServer: {
        port: 8080,
        compress: true,
    }
}