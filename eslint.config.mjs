import i18next from 'eslint-plugin-i18next';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { js, 'react-hooks': pluginReactHooks },
        ...js.configs.recommended,
        extends: ['js/recommended'],
        languageOptions: { globals: globals.browser },
    },
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    i18next.configs['flat/recommended'],
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'no-unused-vars': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            'max-len': [
                'error',
                {
                    ignoreComments: true,
                    ignorePattern: [
                        '^import\\s.+\\sfrom\\s.+$',
                        '^export\\s.+\\sfrom\\s.+$',
                    ],
                },
            ],
            ...pluginReactHooks.configs.recommended.rules,
        },
    },
]);
