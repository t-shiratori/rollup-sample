import myExample from './plugins/rollup-plugin-my-example.js'
import plugin1 from './plugins/plugin1.js'
import plugin2 from './plugins/plugin2.js'
import injectPolyfillPlugin from './plugins/injectPolyfillPlugin.js'
import transformCodePlugin from './plugins/transformCodePlugin.js'
import buildEndTransformCodePlugin from './plugins/buildEndTransformCodePlugin.js'
import buildStartTransformCodePlugin from './plugins/buildStartTransformCodePlugin.js'
import closeBundlePlugin from './plugins/closeBundlePlugin.js'
import writeBundlePlugin from './plugins/writeBundlePlugin.js'
import renderStartPlugin from './plugins/renderStartPlugin.js'
import renderChunkPlugin from './plugins/renderChunkPlugin.js'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'

export default {
  input: 'virtual-module', // resolved by our plugin
  input: 'src/main.ts',
  plugins: [
    // myExample(),
    json(),
    plugin2(),
    plugin1(),
    injectPolyfillPlugin(),
    transformCodePlugin(),
    buildEndTransformCodePlugin(),
    buildStartTransformCodePlugin(),
    renderChunkPlugin(),
    renderStartPlugin(),
    writeBundlePlugin(),
    closeBundlePlugin(),
  ],
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
