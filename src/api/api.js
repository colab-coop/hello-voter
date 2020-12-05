import queryString from 'query-string';
import {
  LOGIN_URL,
  TRIPLERS_URL,
  PUT_TRIPLERS_URL,
  AMBASSADOR_URL,
  SIGNUP_URL,
  TRIPLER_URL,
  CONFIRM_TRIPLER_URL,
  COMPLETE_ONBOARDING,
  STRIPE_PAYMENT_URL,
  PAYMENT_HISTORY_URL,
  TRIPLERS_LIMIT_URL,
  PAYPAL_PAYMENT_URL,
  CRM_URL,
} from '../constants';

const { REACT_APP_OAUTH_HEADER, REACT_APP_TOKEN_KEY, REACT_APP_AUDIANCE, REACT_APP_KEY, REACT_APP_DEVELOPMENT } = process.env

const errorHandler = (e) => {
  console.warn(e)
}

const isFailStatusCode = (status) => {
  return [400, 401, 403, 404, 500].includes(status)
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

export const saveProfile = async (user) => {
  try {
    let res = await fetch(AMBASSADOR_URL, {
      method: 'PUT',
      headers: addAuth(),
      body: JSON.stringify(user)
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
    console.log('Fetched Ambassador:', data);

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

export const searchTriplers = async (formData) => {
  try {
    // Map frontend data names to backend search params.
    const query = queryString.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      // Invert the percentage.
      distance: 1.0 - (formData.distance || 0),
      age: formData.age,
      gender: formData.gender,
      msa: formData.msa,
    });
    let res = await fetch(`${TRIPLER_URL}?${query}`, {
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

export const getCrmToken = async () => {
  try {
    const res = await fetch(`${CRM_URL}/token`, {
      method: 'GET',
      headers: addAuth()
    });
    const data = await res.json();
    if (isFailStatusCode(data.code)) {
      return { error: data };
    }
    return { data };
  } catch (e) {
    errorHandler(e);
    return false;
  }
}
