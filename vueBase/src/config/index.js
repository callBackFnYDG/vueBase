import api from './api'

const install = (Vue) => {
  if (install.installed) return

  const config = Object.assign(api)
  Vue.$config = config // eslint-disable-line

  Object.defineProperties(Vue.prototype, {
    $config: {
      get() {
        return config
      }
    }
  })
}

export default install
