const { REACT_APP_API_URL } = process.env

export const SERVER_URL =
  `https://${process.env.REACT_APP_API_DOMAIN}/HelloVoterHQ/${process.env.REACT_APP_ORGID}/api/v1`

export const LOGIN_URL = `${SERVER_URL}/hello`

const API_URL = `${REACT_APP_API_URL}/api/v1/va`
export const TRIPLERS_URL = `${API_URL}/ambassadors/current/triplers`
export const PUT_TRIPLERS_URL = `${API_URL}/ambassadors/current/triplers`
export const AMBASSADOR_URL = `${API_URL}/ambassadors/current`
export const FREE_TRIPLERS_URL = `${API_URL}/suggest-triplers`
export const SIGNUP_URL = `${API_URL}/ambassadors/signup`
export const TRIPLER_URL = `${API_URL}/triplers`
export const CONFIRM_TRIPLER_URL = `${API_URL}/triplers`
export const COMPLETE_ONBOARDING = `${API_URL}/ambassadors/current/complete-onboarding`
export const STRIPE_PAYMENT_URL = `${API_URL}/payouts/account?stripe=true`
export const PAYPAL_PAYMENT_URL = `${API_URL}/payouts/account?paypal=true`
export const PAYMENT_HISTORY_URL = `${API_URL}/ambassadors/current/payouts`
export const TRIPLERS_LIMIT_URL = `${API_URL}/triplers-limit`
