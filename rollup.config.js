import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import merge from 'lodash.merge';
import { version } from './package.json';

import dts from "rollup-plugin-dts";

const extensions = ['.js', '.ts'];

const jobs = {
  umd: {
    output: {
      format: 'umd',
      name: 'mmUtil',
      file: `./lib/index.umd.${version}.js`
    }
  },
  cjs: {
    output: {
      format: 'cjs',
      name: 'mmUtil',
      file: `./lib/index.js`,
      exports: 'auto'
    }
  },
  esm: {
    output: {
      format: 'esm',
      name: 'mmUtil',
      file: `./lib/index.esm.${version}.js`
    }
  },
  min: {
    output: {
      format: 'umd',
      name: 'mmUtil',
      file: `./lib/index.umd.min.${version}.js`
    },
    plugins: [uglify()]
  }
};
// 从环境变量获取打包特征
const mergeConfig = jobs[process.env.FORMAT || 'esm'];

export default [merge(
  {
    input: 'src/main.ts',
    plugins: [
      dts(),
      json(),
      nodeResolve({
        extensions,
        modulesOnly: true
      }),
      babel({
        exclude: 'node_modules/**',
        extensions
      })
    ]
  },
  mergeConfig
), {
  input: "types/index.d.ts",
  output: [{
    file: "lib/index.d.ts",
    format: "es"
  }],
  plugins: [dts()],
}];
