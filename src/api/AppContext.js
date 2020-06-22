import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useLocalStorage } from '../hooks/useLocalStorage'
import * as api from './api'

const initialState = {}

export const AppContext = React.createContext(initialState)

export const AppProvider = ({ children }) => {
  const [ token, setToken ] = useLocalStorage('token', null)
  const { user, authenticated } = useAuth(token)
  return (
    <AppContext.Provider value={{ user, authenticated, setToken, api }}>
      {children}
    </AppContext.Provider>
  )
}
