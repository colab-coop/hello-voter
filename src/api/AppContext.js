import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Loading from 'carbon-components-react/lib/components/Loading'
import * as api from './api'

const initialState = {}

export const AppContext = React.createContext(initialState)

export const AppProvider = ({ children }) => {
  const [ token, setAuthToken ] = useLocalStorage('token', null)
  const [ data, setData ] = useState({})
  const [ pageLoading, setPageLoading ] = useState(false)
  const { user, authenticated, signOut, loading, fetchUser } = useAuth(token, api)
  return (
    <AppContext.Provider value={{ user, authenticated, signOut, setAuthToken, api, loading, setPageLoading, fetchUser, data, setData }}>
      { pageLoading && <Loading /> }
      {children}
    </AppContext.Provider>
  )
}
