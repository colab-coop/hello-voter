import { useEffect, useState } from 'react'

export const useAuth = (token, api) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const fetchUser = async () => {
    const { error, data } = await api.fetchAmbassador()
    if (error) {
      // TODO: Change authenticated to "in_signup_process"
      if (error.msg === 'No current ambassador') {
        setAuthenticated(true)
      }
      setLoading(false)
      return {
        completed: false,
        error
      }
    }
    setUser(data)
    setAuthenticated(true)
    setLoading(false)
    return {
      completed: true,
      data: data
    }
  }
  useEffect(() => {
    if (!authenticated) fetchUser();
  }, [authenticated])
  return {
    authenticated,
    user,
    loading,
    fetchUser
  }
}
