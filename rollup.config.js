/*
 * Copyright (c) 2018 Brook.ai. All rights reserved.
 */

import esformatter from 'rollup-plugin-esformatter'
import cleanup from 'rollup-plugin-cleanup'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: {
    interop: true,
  },
  external: [
    ...(Object.keys(pkg.dependencies || {})),
    ...(Object.keys(pkg.peerDependencies || {})),
  ],
  plugins: [
    esformatter({
      indent: {
        value: '  ',
      },
      lineBreak: {
        before: {
          ClassDeclaration: 2,
        },
        after: {
          FunctionDeclarationClosingBrace: 2,
          ClassOpeningBrace: 1,
          ClassClosingBrace: 2,
        },
      },
    }),
    cleanup(),
  ],
}
