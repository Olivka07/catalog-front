export type TypeMode = 'development' | 'production';
export interface TypePaths {
    entry: string;
    build: string;
    html: string;
    src: string;
    public: string;
}
export interface BuildOptions {
    paths: TypePaths;
    mode: TypeMode;
    isDev: boolean;
    port: number;
    appTracerToken: string | null;
}

export interface EnvOptions {
    port: number;
    mode: TypeMode;
    appTracerToken?: string;
}
