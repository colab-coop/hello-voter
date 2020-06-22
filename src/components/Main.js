import React, { useEffect } from 'react'
import { useQuery } from '../hooks/useQuery'
import { AppContext } from '../api/AppContext'

export const Main = () => {
  const { setToken, authenticated } = React.useContext(AppContext)
  const query = useQuery()
  const token = query.get('jwt')
  useEffect(() => {
    setToken(token)
  }, [token, setToken])
  return (
    <>
      {!authenticated ? 'Hello Voter!' : 'Logged In!'}
    </>
  )
}
