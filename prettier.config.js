/* eslint-disable import/no-anonymous-default-export */
/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: [
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports'
  ],
  arrowParens: 'avoid',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  semi: false,
  proseWrap: 'always',
  printWidth: 80,
  endOfLine: 'lf',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^~/types/(.*)$',
    '^~/config/(.*)$',
    '^~/lib/(.*)$',
    '^~/hooks/(.*)$',
    '^~/components/ui/(.*)$',
    '^~/components/(.*)$',
    '^~/styles/(.*)$',
    '^~/app/(.*)$',
    '',
    '',
    '^[./]'
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy']
}
