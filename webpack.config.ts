import path from 'node:path';
import {
    BuildOptions,
    EnvOptions,
    TypeMode,
    TypePaths
} from './config/build/types';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: EnvOptions) => {
    const mode: TypeMode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;
    const APP_TRACER_TOKEN = env.appTracerToken ?? null;

    const paths: TypePaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    };

    const options: BuildOptions = {
        mode,
        paths,
        isDev,
        port: PORT,
        appTracerToken: APP_TRACER_TOKEN
    };

    const config = buildWebpackConfig(options);

    return config;
};
