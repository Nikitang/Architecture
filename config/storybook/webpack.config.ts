import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path, { dirname } from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.module?.rules) {
        config.module.rules = config.module.rules.map((rule) => {
            if (
                rule &&
                typeof rule === 'object' &&
                /svg/.test(rule.test as string)
            ) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true));
    config.module?.rules?.push({
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        options: {
            transpileOnly: true,
            compilerOptions: {
                module: 'esnext',
                moduleResolution: 'bundler',
                jsx: 'react-jsx',
            },
        },
        exclude: /node_modules/,
    });
    return config;
};
