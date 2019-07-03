/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const install = (Vue) => {
  if (install.installed) return

  const clone = (obj) => {
    let buf
    if (obj instanceof Date) {
      return obj
    } else if (obj instanceof Array) {
      buf = []
      let i = obj.length
      while (i--) {
        buf[i] = clone(obj[i])
      }
      return buf
    } else if (obj instanceof Object) {
      buf = {}
      for (const i in obj) {
        buf[i] = clone(obj[i])
      }
      return buf
    } else {
      return obj
    }
  }

  Vue.$clone = clone

  Object.defineProperties(Vue.prototype, {
    $clone: {
      get() {
        return clone
      }
    }
  })
}

export default install
