import { useEffect, useState } from 'react'

export const useAuth = (token, api) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect( () => {
    const fetchUser = async () => {
      if (!authenticated) {
        const fetched = await api.fetchAmbassador()
        if (fetched && fetched.data.code !== 401) {
          setUser(fetched.data)
          setAuthenticated(true)
        }
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
