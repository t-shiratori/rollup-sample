import { createFilter } from '@rollup/pluginutils'

export default function closeBundlePlugin(options = {}) {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'closeBundlePlugin',
    closeBundlePlugin(args) {
      console.log('closeBundlePlugin: ', args)
      console.log('closeBundlePlugin this: ', this)
    },
  }
}
