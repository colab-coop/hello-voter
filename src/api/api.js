
const API_URL = 'https://localhost:321'
const LOGIN_URL = `${API_URL}/hello`
const USER_API_URL = `${API_URL}/user`
const OAUTH_HEADER = 'x-sm-oauth-url'
const TOKEN_KEY = 'token'
const MOCK = true

const errorHandler = (e) => {
  console.warn(e)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

const addAuth = (headers) => {
  const token = getToken()
  return {
    ...(headers ? headers : null),
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
}

export const logIn = async (sm) => {
  try {
    let res = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: addAuth()
    })
    let data = await res.json()
    let smOauthUrl = res.headers.get(OAUTH_HEADER)
    return {
      data,
      smOauthUrl
    }
  } catch(e) {
    return errorHandler(e)
  }
}

export const getUser = async () => {
  try {
    let res = await fetch(USER_API_URL, {
      method: 'GET',
      headers: addAuth()
    })
    let data = await res.json()
    return {
      data
    }
  } catch(e) {
    return errorHandler(e)
  }
}

export const setToken = (token) => {
  localStorage.setItem('token', token)
  return true
}
