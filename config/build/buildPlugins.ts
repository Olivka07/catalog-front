import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';
import { BuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({
    paths,
    isDev,
    appTracerToken
}: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].[contenthash:8].css',
            chunkFilename: './css/[name].[contenthash:8].css'
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __APP_TRACER_TOKEN__: JSON.stringify(appTracerToken)
        })
    ];
}
