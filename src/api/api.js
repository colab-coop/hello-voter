import {
  LOGIN_URL,
  TRIPLERS_URL,
  PUT_TRIPLERS_URL,
  AMBASSADOR_URL,
  FREE_TRIPLERS_URL,
  SIGNUP_URL,
  TRIPLER_URL,
  CONFIRM_TRIPLER_URL,
  COMPLETE_ONBOARDING,
  STRIPE_PAYMENT_URL,
  PAYMENT_HISTORY_URL,
  TRIPLERS_LIMIT_URL,
  PAYPAL_PAYMENT_URL,
} from '../constants';

const { REACT_APP_OAUTH_HEADER, REACT_APP_TOKEN_KEY, REACT_APP_AUDIANCE, REACT_APP_KEY, REACT_APP_DEVELOPMENT } = process.env

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

export const setStripeToken = async (token, accountId) => {
  try {
    let res = await fetch(STRIPE_PAYMENT_URL, {
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

export const setPayPalAccount = async (email) => {
  try {
    let res = await fetch(`${PAYPAL_PAYMENT_URL}`, {
      method: 'POST',
      headers: addAuth(),
      body: JSON.stringify({ email })
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

export const searchTriplers = async (firstName, lastName) => {
  try {
    let res = await fetch(`${TRIPLER_URL}?firstName=${firstName}&lastName=${lastName}`, {
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

export const fetchTriplersLimit = async (sm) => {
  try {
    let res = await fetch(TRIPLERS_LIMIT_URL, {
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

export const deleteTripler = async (triplers) => {
  try {
    let res = await fetch(TRIPLERS_URL, {
      method: 'DELETE',
      headers: addAuth(),
      body: JSON.stringify({triplers: triplers})
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



