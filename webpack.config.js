const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

dotenv.config();

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: './src/frontend/index.js',
    devtool: isProduction
            ? 'hidden-source-map'
            : 'cheap-source-map',
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'assets/app.js',
        publicPath: '/',
    },
    devServer: {
        publicPath: '/',
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            name: true,
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    priority: 1,
                    filename: 'assets/vendor.js',
                    enforce: true,
                    test(module, chunks) {
                        const name = module.nameForCondition
                            && module.nameForCondition();
                        return chunks.some(
                            (chunks) => {
                                return (
                                    chunks.name !== 'vendor' &&
                                        /[\\/]node_modules[\\/]/.test(name)
                                );
                            }
                        );
                    },
                },
            },
        },
        minimize: isProduction ? true : false,
        minimizer: isProduction ? [new TerserPlugin()] : [],
    }, 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                ],
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: [
                    {
                    loader: 'file-loader',
                    options: { name: 'assets/resources/[name].[ext]' },
                    }
                ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        }),
        isProduction ? new CompressionPlugin({
            test: /\.js$|\.css$/,
            filename: '[path].gz',
        }) : () => {},
    ],
};