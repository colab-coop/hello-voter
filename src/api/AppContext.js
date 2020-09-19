import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useLocalStorage } from '../hooks/useLocalStorage'
import * as api from './api'

const initialState = {}

export const AppContext = React.createContext(initialState)

export const AppProvider = ({ children, overrides }) => {
  const [ token, setToken ] = useLocalStorage('token', null)
  const [ ambassador, setAmbassador ] = useState({address:{}})
  const [ data, setData ] = useState({})
  const { user, authenticated, loading, fetchUser } = useAuth(token, api)
  return (
    <AppContext.Provider value={{ user, authenticated, setToken, api, loading, ambassador, setAmbassador, fetchUser, data, setData, ...overrides }}>
      {children}
    </AppContext.Provider>
  )
}
