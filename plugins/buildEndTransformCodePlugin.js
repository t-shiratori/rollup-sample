import { createFilter } from '@rollup/pluginutils'

export default function buildEndTransformCodePlugin(options = {}) {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'build-end-transform-code',
    buildEnd(args) {
      console.log('buildEnd: ', args)
      const specialModules = Array.from(this.getModuleIds()).filter((id) => {
        console.log('this.getModuleInfo: ', this.getModuleInfo(id))
      })

      console.log('buildEnd: ', specialModules)
      console.log('this: ', this)
      console.log('getModuleInfo: ', this.getModuleInfo())
      console.log('getModuleIds: ', this.getModuleIds())
      //console.log('getFileName: ', this.getFileName())
      console.log('getWatchFiles: ', this.getWatchFiles())
      //console.log('info: ', this.info())
      // do something with this list
    },
  }
}
