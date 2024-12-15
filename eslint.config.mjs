import { FlatCompat } from '@eslint/eslintrc';
import pluginQuery from '@tanstack/eslint-plugin-query';
import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import reactPlugin from 'eslint-plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...pluginQuery.configs['flat/recommended'],
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  {
    ...perfectionist.configs['recommended-natural'],
    rules: {
      'perfectionist/sort-objects': [
        'error',
        {
          customGroups: {
            id: ['id', '_id'],
          },
          destructuredObjects: true,
          groups: ['id', 'unknown'],
          ignoreCase: true,
          ignorePattern: [],
          newlinesBetween: 'ignore',
          objectDeclarations: true,
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: 'keep',
          styledComponents: true,
          type: 'alphabetical',
          useConfigurationIf: {},
        },
      ],
    },
  },
  eslintConfigPrettier,
];

export default eslintConfig;
