import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

const addDummyData = (user) => {
  const dummyData = {
    type: 'user', // ambassador, tripler
    approved: false,
    signupCompleted: false
  }
  return Object.assign(user, dummyData)
}

const completeSignup = (user) => {
  const data = {
    signupCompleted: true
  }
  return Object.assign(user, data)
}

const approveUser = (user) => {
  const data = {
    approved: true
  }
  return Object.assign(user, data)
}

export const useAuth = (token) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  useEffect( () => {
    const fetchUser = () => {
      if (token && !authenticated) {
        const fetched = addDummyData(jwt_decode(token))
        if (fetched) setUser(fetched)
        setAuthenticated(Boolean(fetched))
        return true
      }
    }
    fetchUser()
  }, [token, setAuthenticated, authenticated])
  return {
    authenticated,
    user,
    completeSignup,
    approveUser
  }
}
