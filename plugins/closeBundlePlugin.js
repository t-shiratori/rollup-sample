import { createFilter } from '@rollup/pluginutils'

export default function closeBundlePlugin(options = {}) {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'closeBundlePlugin',
    closeBundle(args1, args2, args3, args4) {
      console.log('closeBundlePlugin: ', { args1, args2, args3, args4 })
      console.log('closeBundlePlugin this: ', this)
    },
  }
}
