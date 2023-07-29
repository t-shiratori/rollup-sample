import { createFilter } from '@rollup/pluginutils'

export default function renderChunkPlugin(options = {}) {
  const filter = createFilter('/**/*/main.ts', options.exclude)

  return {
    name: 'renderChunkPlugin',
    renderChunk(code, chunk, args3, args4) {
      console.log('renderChunkPlugin: ', { code, chunk, args3, args4 })
      console.log('renderChunkPlugin chunk.facadeModuleId: ', chunk.facadeModuleId)
      console.log('renderChunkPlugin this: ', this)
      if (!filter(chunk.facadeModuleId)) return
      return '#!/usr/bin/env node\n' + code
    },
  }
}
