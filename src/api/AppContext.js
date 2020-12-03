import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useLocalStorage } from '../hooks/useLocalStorage'
import * as api from './api'

const initialState = {}

export const AppContext = React.createContext(initialState)

export const AppProvider = ({ children }) => {
  const [ token, setAuthToken ] = useLocalStorage('token', null)
  const [ data, setData ] = useState({})
  const { user, authenticated, signOut, loading, fetchUser } = useAuth(token, api)
  console.log({authenticated, user});
  return (
    <AppContext.Provider value={{ user, authenticated, signOut, setAuthToken, api, loading, fetchUser, data, setData }}>
      {children}
    </AppContext.Provider>
  )
}
