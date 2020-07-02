const { REACT_APP_OAUTH_HEADER, REACT_APP_TOKEN_KEY, REACT_APP_AUDIANCE, REACT_APP_KEY, REACT_APP_DEVELOPMENT, REACT_APP_API_URL } = process.env

export const SERVER_URL =
  `https://${process.env.REACT_APP_API_DOMAIN}/HelloVoterHQ/${process.env.REACT_APP_ORGID}/api/v1`

const LOGIN_URL = `${SERVER_URL}/hello`
const TRIPLERS_URL = `${REACT_APP_API_URL}/api/v1/va/triplers`
const PUT_TRIPLERS_URL = `${REACT_APP_API_URL}/api/v1/va/ambassadors/current/triplers`

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
    Authorization: `Bearer ${token ? token.replace(/"/gi, '') : 'of the one ring'}`,
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
    let smOauthUrl = `${res.headers.get(REACT_APP_OAUTH_HEADER)}/${sm}/?aud=${REACT_APP_AUDIANCE}&app=${REACT_APP_KEY}`
    if (REACT_APP_DEVELOPMENT === 'true') smOauthUrl += ['&local=', REACT_APP_DEVELOPMENT].join('')
    return {
      data,
      smOauthUrl
    }
  } catch(e) {
    errorHandler(e)
    return false
  }
}

export const fetchTriplers = async () => {
  try {
    let res = await fetch(TRIPLERS_URL, {
      method: 'GET',
      headers: addAuth()
    })
    let data = await res.json()
    return {
      data
    }
  } catch(e) {
    errorHandler(e)
    return false
  }
}

export const claimTriplers = async (selectedTriplers) => {
  try {
    let res = await fetch(PUT_TRIPLERS_URL, {
      method: 'PUT',
      headers: addAuth(),
      body: JSON.stringify({
        triplers: selectedTriplers
      })
    })
    let data = await res.json()
    return {
      data
    }
  } catch(e) {
    errorHandler(e)
    return false
  }
}

export const fetchTripler = async (triplerId) => {
  try {
    let res = await fetch(`${TRIPLERS_URL}/${triplerId}`, {
      method: 'GET',
      headers: addAuth()
    })
    let data = await res.json()
    return {
      data
    }
  } catch(e) {
    errorHandler(e)
    return false
  }
}
