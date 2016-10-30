const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        'main.js': ['./src/main.js']
    },
    output: {
        path: path.join(__dirname, '/static'),
        publicPath: '/static/',
        filename: 'main.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file?limit=8192',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    devtool: '#eval-source-map',
    resolve: {
        extensions: ['', '.js', '.scss', '.vue'],
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ]
};
