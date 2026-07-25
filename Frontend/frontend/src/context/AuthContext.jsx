import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { login as signIn, logout as signOut } from '../services/authService'

const AuthContext = createContext(null)
const STORAGE_KEY = 'leaddesk-mini-user'

/** Temporary local authentication provider until backend authentication is available. */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem(STORAGE_KEY)
      return storedUser ? JSON.parse(storedUser) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    else localStorage.removeItem(STORAGE_KEY)
  }, [user])

  const value = useMemo(() => ({
    user,
    isAuthenticated: Boolean(user),
    login: async (credentials) => {
      const nextUser = await signIn(credentials)
      setUser(nextUser)
      return nextUser
    },
    logout: async () => {
      await signOut()
      setUser(null)
    },
  }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside an AuthProvider.')
  return context
}
