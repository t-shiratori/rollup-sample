import { createFilter } from '@rollup/pluginutils'

export default function writeBundlePlugin(options = {}) {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'writeBundlePlugin',
    writeBundle(args1, args2, args3, args4) {
      console.log('writeBundlePlugin: ', { args1, args2, args3, args4 })
      console.log('writeBundlePlugin this: ', this)
    },
  }
}
