export function popMessage(msg) {
  alert(msg)
}

// axios
import axios from 'axios'

axios.defaults.baseURL = '/api/';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.withCredentials=true;

/**
 * @param url
 * @param method get|post|put|delete...
 * @param params like queryString. if a url is index?a=1&b=2, params = {a: '1', b: '2'}
 * @param data post data, use for method put|post
 * @returns {Promise}
 */
/*
axios.interceptors.response.use(response => {
  const sessionCookie = Cookie.get()
  alert('Cookie: ' + sessionCookie)
  return response
})
*/
function ajax (url, method, options) {
  if (options !== undefined) {
    var {params = {}, data = {}} = options
  } else {
    params = data = {}
  }
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      params,
      data,
      withCredentials: true
    }).then(res => {
      resolve(res)
    }, res => {
      reject(res);
    })
  })
}

export default {
  login (data) {
    return ajax('login/', 'post', {
      data
    })
  },
  register (data) {
    return ajax('register/', 'post', {
      data
    })
  },
  logout () {
    return ajax('logout/', 'get')
  },
  getProfile() {
    return ajax('profile/', 'get')
  }
}
