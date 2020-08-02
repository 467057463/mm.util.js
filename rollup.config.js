import json from 'rollup-plugin-json';

export default {
  input: 'src/main.js',
  output: [
    {
      format: 'iife',
      name: 'mmUtil',
      file: './build/bundle.iife.js',
    },
    {
      format: 'umd',
      name: 'mmUtil',
      file: './build/bundle.umd.js', 
    }
  ],
  plugins: [json()]
};