import {
  Button,
  Input
} from 'iview'
import Log from './vue-log'
import Clone from './vue-clone'
import Axios from './vue-axios'
import Verify from './vue-verify'
import 'iview/dist/styles/iview.css'

const install = (Vue) => {
  if (install.installed) return

  /* for production */
  // Vue.use(Log, false) // 日志打印
  Vue.component('Button', Button)
  Vue.component('Input', Input)

  Vue.use(Log)
  Vue.use(Clone)
  Vue.use(Verify)
  Vue.use(Axios, {
    baseURL: Vue.$config.API_BASE_URL,
    headers: Vue.$config.API_DEFAULT_HEADERS
  })
}

export default install
