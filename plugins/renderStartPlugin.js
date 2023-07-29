import { createFilter } from '@rollup/pluginutils'

export default function renderStartPlugin(options = {}) {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'renderStartPlugin',
    renderStart(args1, args2, args3, args4) {
      console.log('renderStartPlugin: ', { args1, args2, args3, args4 })
      console.log('renderStartPlugin this: ', this)
    },
  }
}
