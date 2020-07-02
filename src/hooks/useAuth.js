import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

export const useAuth = (token) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect( () => {
    const fetchUser = () => {
      if (token && !authenticated) {
        const fetched = jwt_decode(token)
        if (fetched) setUser(fetched)
        setAuthenticated(Boolean(fetched))
        return true
      }

      setLoading(false)
    }
    fetchUser()
  }, [token, setAuthenticated, authenticated])
  return {
    authenticated,
    user,
    loading
  }
}
