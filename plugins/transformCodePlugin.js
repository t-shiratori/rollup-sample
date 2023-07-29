import { createFilter } from '@rollup/pluginutils'

export default function transformCodePlugin(options = {}) {
  console.log('transformCodePlugin: ', { options })
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'transform-code',
    transform(code, id) {
      console.log('transform-code: ', { code, id })
      if (!filter(id)) return

      // proceed with the transformation...
      // return {
      //   code: generatedCode,
      //   map: generatedSourceMap,
      // }
    },
  }
}
