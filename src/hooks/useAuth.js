import { useEffect, useState } from 'react'
import { getUser } from '../api/api'

export const useAuth = (token) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  useEffect( () => {
    const fetchUser = async () => {
      const fetched = await getUser()
      if (fetched) setUser(fetched)
      setAuthenticated(Boolean(fetched))
      return true
    }
    fetchUser()
  }, [token, setAuthenticated])
  return {
    authenticated,
    user
  }
}
