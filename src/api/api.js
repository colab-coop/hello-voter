const { REACT_APP_OAUTH_HEADER, REACT_APP_TOKEN_KEY, REACT_APP_AUDIANCE, REACT_APP_REDIRECT_URL, REACT_APP_DEVELOPMENT } = process.env

export const SERVER_URL =
  `https://${process.env.REACT_APP_API_DOMAIN}/HelloVoterHQ/${process.env.REACT_APP_ORGID}/api/v1`

const LOGIN_URL = `${SERVER_URL}/hello`

const errorHandler = (e) => {
  console.warn(e)
}

export const getToken = () => {
  return localStorage.getItem(REACT_APP_TOKEN_KEY)
}

const addAuth = (headers) => {
  const token = getToken()
  return {
    ...(headers ? headers : null),
    Authorization: `Bearer ${token ? token : 'of the one ring'}`,
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
    let smOauthUrl = `${res.headers.get(REACT_APP_OAUTH_HEADER)}/${sm}/?aud=${REACT_APP_AUDIANCE}&app=${REACT_APP_REDIRECT_URL}&local=${REACT_APP_DEVELOPMENT}`
    return {
      data,
      smOauthUrl
    }
  } catch(e) {
    errorHandler(e)
    return false
  }
}
