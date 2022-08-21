module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                alias: {
                    '@screens': './src/screens',
                    '@components': './src/components',
                    '@theme': './src/theme',
                    '@images': './src/assets/images',
                    '@services': './src/services',
                    '@navigation': './src/navigation',
                    '@config': './src/config',
                    '@state': './src/state',
                    '@hooks': './src/hooks',
                },
            },
        ],
    ],
};
