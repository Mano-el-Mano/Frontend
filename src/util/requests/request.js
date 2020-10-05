let API = process.env.REACT_APP_API
console.log('process.env.REACT_APP_API', process.env.REACT_APP_API)

const request = async (routeSuffix, config) => {
  const token = await localStorage.getItem('jwt')

  const url = API + routeSuffix

  const options = {
    method: config ? config.method : 'GET', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer' // no-referrer, *client
  }

  if (config !== undefined && config.body !== undefined) {
    options.body = JSON.stringify(config.body)
  }

  if (token) {
    options.headers.Authorization = 'Bearer ' + token
  }

  const response = await fetch(url, options)
  if (process.env.REACT_APP_STAGE === 'development') {
    const res = await response.clone().json()
    console.log(res)
  }
  if (response.ok) {
    const res = await response.json()
    res.status = response.status
    return res
  } else {
    return response
  }
}

export default request
