import { createFilter } from '@rollup/pluginutils'

export default function writeBundlePlugin(options = {}) {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'writeBundlePlugin',
    writeBundlePlugin(args) {
      console.log('writeBundlePlugin: ', args)
      console.log('writeBundlePlugin this: ', this)
    },
  }
}
