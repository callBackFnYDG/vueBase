/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
const install = (Vue, debug = true) => {
  if (install.installed) return

  const log = debug ? console.log.bind(console) : () => {}
  const table = debug ? console.table.bind(console) : () => {}
  const assert = debug ? console.assert.bind(console) : () => {}
  const warn = debug ? console.warn.bind(console) : () => {}
  const error = debug ? console.error.bind(console) : () => {}
  const group = debug ? console.group.bind(console) : () => {}
  const groupEnd = debug ? console.groupEnd.bind(console) : () => {}

  Vue.$log = log
  Vue.$info = log
  Vue.$table = table
  Vue.$assert = assert
  Vue.$warn = warn
  Vue.$error = error
  Vue.$group = group
  Vue.$groupEnd = groupEnd

  Object.defineProperties(Vue.prototype, {
    $log: {
      get() {
        return log
      }
    },
    $info: {
      get() {
        return log
      }
    },
    $assert: {
      get() {
        return assert
      }
    },
    $table: {
      get() {
        return table
      }
    },
    $warn: {
      get() {
        return warn
      }
    },
    $error: {
      get() {
        return error
      }
    },
    $group: {
      get() {
        return group
      }
    },
    $groupEnd: {
      get() {
        return groupEnd
      }
    }
  })
}

export default install
