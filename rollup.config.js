import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const extensions = ['.js', '.ts'];

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'es',
      file: './lib/index.js'
    },
    {
      format: 'umd',
      file: './lib/index.umd.js',
      name: 'mmUtil'
    },
  ],
  plugins: [
    nodeResolve({
      extensions,
      modulesOnly: true
    }),
    babel({
      exclude: 'node_modules/**',
      extensions
    })
  ]
}