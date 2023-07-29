import myExample from './rollup-plugin-my-example.js'
import json from '@rollup/plugin-json'

export default {
  input: 'virtual-module', // resolved by our plugin
  plugins: [myExample(), json()],
  input: 'src/main.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
}
