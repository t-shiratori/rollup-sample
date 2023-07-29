export default function buildStartTransformCodePlugin(options = {}) {
  return {
    name: 'build-start-transform-code',
    buildStart(args) {
      console.log('buildStart: ', args)
      console.log('buildStart this: ', this)
      // trigger loading a module. We could also pass an initial
      // "meta" object here, but it would be ignored if the module
      // was already loaded via other means
      // this.load({ id: 'my-id' })
      // the module info is now available, we do not need to await
      // this.load
      // const meta = this.getModuleInfo('my-id').meta
      // we can also modify meta manually now
      //meta.test = { some: 'data' }
    },
  }
}
