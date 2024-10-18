import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginPrettier.configs.recommended, // Настройка для Prettier
    {
        rules: {
            'prettier/prettier': 'error' // Подсвечивает ошибки, если код не соответствует правилам Prettier
        }
    },
    configPrettier // Отключает правила, конфликтующие с Prettier
];
