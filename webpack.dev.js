/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 8080,
        hot: true,
    },
});