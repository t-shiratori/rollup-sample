export default function plugin2() {
  return {
    name: 'plugin2',
    onLog(level, log) {
      console.log('plugin2 onLog: ', { level, log })
      if (log.plugin === 'plugin1' && log.pluginCode === 'SPECIAL_CODE') {
        // You can modify logs in this hooks as well
        log.meta = 'processed by plugin 2'
        // This turns the log back to "info". If this happens in
        // response to the first plugin, it will not be passed back to
        // either plugin to avoid an infinite loop. If both plugins are
        // active, the log will be an info log if the second plugin is
        // placed after the first one
        this.info(log)
        return false
      }
    },
  }
}
