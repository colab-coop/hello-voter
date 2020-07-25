const { REACT_APP_OAUTH_HEADER, REACT_APP_TOKEN_KEY, REACT_APP_AUDIANCE, REACT_APP_KEY, REACT_APP_DEVELOPMENT, REACT_APP_API_URL } = process.env

export const SERVER_URL =
  `https://${process.env.REACT_APP_API_DOMAIN}/HelloVoterHQ/${process.env.REACT_APP_ORGID}/api/v1`

const LOGIN_URL = `${SERVER_URL}/hello`
const TRIPLERS_URL = `${REACT_APP_API_URL}/api/v1/va/ambassadors/current/triplers`
const PUT_TRIPLERS_URL = `${REACT_APP_API_URL}/api/v1/va/ambassadors/current/triplers`
const AMBASSADOR_URL = `${REACT_APP_API_URL}/api/v1/va/ambassadors/current`
const FREE_TRIPLERS_URL = `${REACT_APP_API_URL}/api/v1/va/suggest-triplers`
const SIGNUP_URL = `${REACT_APP_API_URL}/api/v1/va/ambassadors/signup`
const TRIPLER_URL = `${REACT_APP_API_URL}/api/v1/va/triplers`
const CONFIRM_TRIPLER_URL = `${REACT_APP_API_URL}/api/v1/va/triplers`
const COMPLETE_ONBOARDING = `${REACT_APP_API_URL}/api/v1/va/ambassadors/current/complete-onboarding`
const PAYMENT_URL = `${REACT_APP_API_URL}/api/v1/va/payouts/account?stripe=true`
const PAYMENT_HISTORY_URL = `${REACT_APP_API_URL}/api/v1/va/ambassadors/current/payouts`

const errorHandler = (e) => {
  console.warn(e)
}

const isFailStatusCode = (status) => {
  return [401, 400, 500].includes(status)
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

// TODO: De-duplicate the requests and create a wrapper around it

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

    if (isFailStatusCode(data.code)) {
      return {
        error: data
      }
    }

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
    let res = await fetch(`${TRIPLER_URL}/${triplerId}`, {
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

export const fetchFreeTriplers = async () => {
  try {
    let res = await fetch(`${FREE_TRIPLERS_URL}`, {
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

export const signup = async (tripler) => {
  try {
    let res = await fetch(SIGNUP_URL, {
      method: 'POST',
      headers: addAuth(),
      body: JSON.stringify(tripler)
    })
    let data = await res.json()

    if (isFailStatusCode(data.code)) {
      return {
        error: data
      }
    }

    return {
      data
    }
  } catch(e) {
    errorHandler(e)
    return false
  }
}

export const confirmTriplers = async (triplerId, json) => {
  try {
    let res = await fetch(`${CONFIRM_TRIPLER_URL}/${triplerId}/start-confirm`, {
      method: 'PUT',
      headers: addAuth(),
      body: JSON.stringify(json)
    })
    let data = await res.json()

    if (isFailStatusCode(data.code)) {
      return {
        error: data
      }
    }

    return {
      data
    }
  } catch(e) {
    errorHandler(e)
    return false
  }
}

export const sendReminder = async (id) => {
  try {
    let res = await fetch(`${TRIPLER_URL}/${id}/remind`, {
      method: 'PUT',
      headers: addAuth()
    })
    let data = await res.json()

    if (isFailStatusCode(data.code)) {
      return {
        error: data
      }
    }

    return {
      data
    }
  } catch(e) {
    errorHandler(e)
    return false
  }
}

export const fetchAmbassador = async () => {
  try {
    let res = await fetch(AMBASSADOR_URL, {
      method: 'GET',
      headers: addAuth()
    })

    let data = await res.json()

    if (isFailStatusCode(data.code)) {
      return {
        error: data
      }
    }

    return {
      data
    }
  } catch(e) {
    errorHandler(e)
    return false
  }
}

export const completeOnboarding = async (body) => {
  try {
    let res = await fetch(COMPLETE_ONBOARDING, {
      method: 'PUT',
      headers: addAuth(),
      body: JSON.stringify(body)
    })

    let data = await res.json()

    if (isFailStatusCode(data.code)) {
      return {
        error: data
      }
    }

    return {
      data
    }
  } catch(e) {
    errorHandler(e)
    return false
  }
}

export const setToken = async (token, accountId) => {
  try {
    let res = await fetch(PAYMENT_URL, {
      method: 'POST',
      headers: addAuth(),
      body: JSON.stringify({token: token, account_id: accountId})
    })
    let data = await res.json()

    if (isFailStatusCode(data.code)) {
      return {
        error: data
      }
    }

    return {
      data
    }
  } catch (e) {
    errorHandler(e)
    return false
  }
}

export const getPayments = async () => {
  try {
    let res = await fetch(`${PAYMENT_HISTORY_URL}`, {
      method: 'GET',
      headers: addAuth()
    })
    let data = await res.json()

    if (isFailStatusCode(data.code)) {
      return {
        error: data
      }
    }

    return {
      data
    }
  } catch(e) {
    errorHandler(e)
    return false
  }
}



