// Globally add validation functions to the vue
import {
  isCard,
  isTel,
  isEMail,
  isChinese
} from './verify'
const install = (Vue, debug = true) => {
  if (install.installed) return

  Vue.$isCard = isCard
  Vue.$isTel = isTel
  Vue.$isEMail = isEMail
  Vue.$isChinese = isChinese

  Object.defineProperties(Vue.prototype, {
    $isCard: {
      get() {
        return isCard
      }
    },
    $isTel: {
      get() {
        return isTel
      }
    },
    $isEMail: {
      get() {
        return isEMail
      }
    },
    $isChinese: {
      get() {
        return isChinese
      }
    }
  })
}

export default install
