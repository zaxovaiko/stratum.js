const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        filename: 'stratum.js',
        path: path.resolve(__dirname, 'dist')
    }
};