import { useEffect, useState } from 'react'

export const useAuth = (token, api) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect( () => {
    const fetchUser = async () => {
      if (token && !authenticated) {
        const fetched = await api.fetchAmbassador()
        if (fetched) setUser(fetched.data)
        setAuthenticated(Boolean(fetched))
        setLoading(false)
      }
    }
    fetchUser()
  }, [token, setAuthenticated, authenticated])
  return {
    authenticated,
    user,
    loading
  }
}
