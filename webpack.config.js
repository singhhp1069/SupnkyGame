const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        nft: './src/nft.ts',
        reward: './src/reward.ts',
        gameover : './src/gameover.ts',
        leaderboard: './src/leaderboard.ts',
        index: './src/index.ts',
        
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            chunks: ["index"],
            template: './public/index.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'leaderboard.html',
            chunks: ["leaderboard"],
            template: './public/leaderboard.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'gameover.html',
            chunks: ["gameover"],
            template: './public/gameover.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'reward.html',
            chunks: ["reward"],
            template: './public/reward.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'nft.html',
            chunks: ["nft"],
            template: './public/nft.html'
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            path: require.resolve("path-browserify"),
            buffer: require.resolve("buffer"),
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};