import { createFilter } from '@rollup/pluginutils'

export default function buildEndTransformCodePlugin(options = {}) {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'build-end-transform-code',
    buildEnd(args) {
      console.log('buildEnd: ', args)
      const specialModules = Array.from(this.getModuleIds()).filter(
        (id) => this.getModuleInfo(id).meta.annotating?.special,
      )

      console.log('buildEnd: ', specialModules)
      console.log('buildEnd this: ', this)
      // do something with this list
    },
  }
}
