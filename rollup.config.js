import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import {version} from './package.json';
import del from 'rollup-plugin-delete'

const extensions = ['.js', '.ts'];

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'es',
      file: './lib/index.js'
    },
    {
      format: 'es',
      file: `./lib/mmutil.${version}.es.js`,
    },
    {
      format: 'umd',
      file: `./lib/index.umd.js`,
      name: 'mmUtil'
    },
    {
      format: 'umd',
      file: `./lib/mmutil.${version}.umd.js`,
      name: 'mmUtil'
    }
  ],
  plugins: [
    nodeResolve({
      extensions,
      modulesOnly: true
    }),
    babel({
      exclude: 'node_modules/**',
      extensions
    }),
    del({ targets: 'lib/*' })
  ]
};
