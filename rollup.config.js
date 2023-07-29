import myExample from './rollup-plugin-my-example.js'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'

export default {
  input: 'virtual-module', // resolved by our plugin
  input: 'src/main.ts',
  plugins: [myExample(), json()],
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()],
    },
  ],
}
