import { useEffect, useState } from 'react'

export const useAuth = (token, api) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const fetchUser = async () => {
    const { error, data } = await api.fetchAmbassador()
    if (error) {
      setLoading(false)
      console.log(error)
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
      data: data.data
    }
  }
  useEffect( () => {
    !authenticated && fetchUser()
  }, [authenticated, fetchUser])
  return {
    authenticated,
    user,
    loading,
    fetchUser
  }
}
