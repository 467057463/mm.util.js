import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { uglify } from "rollup-plugin-uglify";

import {version} from './package.json';


const extensions = ['.js', '.ts'];

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'umd',
      file: `./lib/mmutil.${version}.min.js`,
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
    uglify()
  ]
};
