import { createFilter } from '@rollup/pluginutils'
import MagicString from 'magic-string'

export default function transformCodePlugin(options = {}) {
  console.log('transformCodePlugin: ', { options })
  const filter = createFilter('/**/*/main.ts', options.exclude)

  return {
    name: 'transform-code',
    transform(code, id) {
      console.log('transform-code: ', { code, id })
      console.log('filter(id): ', filter(id))
      if (!filter(id)) return

      //const ast = this.parse(code)

      // const json = JSON.parse(`    {
      //   "type": "ExpressionStatement",
      //   "start": 0,
      //   "end": 22,
      //   "expression": {
      //     "type": "TemplateLiteral",
      //     "start": 0,
      //     "end": 22,
      //     "expressions": [],
      //     "quasis": [
      //       {
      //         "type": "TemplateElement",
      //         "start": 1,
      //         "end": 21,
      //         "value": {
      //           "raw": "#! /usr/bin/env node",
      //           "cooked": "#! /usr/bin/env node"
      //         },
      //         "tail": true
      //       }
      //     ]
      //   }
      // }`)

      // ast.body.unshift(json)
      // const newAst = ast

      // console.log('newAst: ', newAst)

      const generatreCode = (args) => {
        console.log('generatreCode: ', { args })
        const magicString = new MagicString(code)

        console.log('magicString.toString: ', magicString.toString())
        const newStrings = magicString.prepend(`#! /usr/bin/env node\n // hogehoge \n`)
        //const newStrings = magicString.prepend(`//aaaa\n`)
        console.log('newStrings.toString: ', newStrings.toString())
        return newStrings.toString()
      }

      // // proceed with the transformation...
      return {
        code: generatreCode(),
        map: null,
      }
    },
  }
}
