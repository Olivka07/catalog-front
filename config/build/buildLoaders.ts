import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const sassLoader: RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        namedExport: false,
                        exportLocalsConvention: 'as-is',
                        auto: /.module.scss$/,
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    }
                }
            },
            {
                loader: 'sass-loader'
            }
        ]
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };

    const fileLoader = {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'images/[hash].[name][ext]'
        }
    };

    const fontsLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[hash].[name][ext]'
        }
    };

    return [tsLoader, sassLoader, svgLoader, fileLoader, fontsLoader];
}
