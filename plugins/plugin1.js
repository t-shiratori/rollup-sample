export default function plugin1() {
  return {
    name: 'plugin1',
    buildStart() {
      this.info({ message: 'Hey', pluginCode: 'SPECIAL_CODE' })
    },
    onLog(level, log) {
      console.log('plugin1 onLog: ', { level, log })
      if (log.plugin === 'plugin1' && log.pluginCode === 'SPECIAL_CODE') {
        // We turn logs into warnings based on their code. This warnings
        // will not be passed back to the same plugin to avoid an
        // infinite loop, but other plugins will still receive it.
        this.warn(log)
        return false
      }
    },
  }
}
