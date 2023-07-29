import { createFilter } from '@rollup/pluginutils'

export default function renderStartPlugin(options = {}) {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'renderStartPlugin',
    renderStartPlugin(args) {
      console.log('renderStartPlugin: ', args)
      console.log('renderStartPlugin this: ', this)
    },
  }
}
