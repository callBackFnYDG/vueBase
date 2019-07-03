/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import Axios from 'axios'

const install = (Vue, options = {}) => {
  if (install.installed) return

  if (!Axios) {
    console.error('You have to install axios.')
    return
  }

  const axios = Axios.create(options)
  Vue.$axios = axios

  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return axios
      }
    },
    $upload: {
      get() {
        return (url, payload, progressCallback, successCallback, failureCallback) => {
          let formData = new FormData()
          if (payload instanceof Array) {
            for (let i in payload) {
              formData.append(`file${i}`, payload[i])
            }
          } else {
            formData.append('file', payload)
          }
          axios.post(url, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (e) => {
              progressCallback(e)
            }
          }).then(response => {
            successCallback(response)
          }).catch(error => {
            failureCallback(error)
          })
        }
      }
    }
  })
}

export default install
