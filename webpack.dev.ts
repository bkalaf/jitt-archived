import path from 'path';
import Dotenv from 'dotenv-webpack';
import {merge} from 'webpack-merge';
import common from './webpack.common';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const dev: any = merge<any>(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'public'),
        open: true,
        compress: true,
        hot: true,
        port: 3000
    },
    plugins: [
        new Dotenv({
            path: './.env.dev'
        }) as any,
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ].filter(Boolean)
});
export default dev;