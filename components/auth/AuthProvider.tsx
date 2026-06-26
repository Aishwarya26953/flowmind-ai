'use client'

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { AuthUser } from '@/lib/auth'
import { clearAuthUser, getStoredAuthUser, hashToSeed, storeAuthUser } from '@/lib/auth'

type AuthContextValue = {
  user: AuthUser | null
  isLoading: boolean
  signIn: (params: { email: string; password: string }) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = getStoredAuthUser()
    setUser(stored)
    setIsLoading(false)
  }, [])

  const signIn = useCallback(async ({ email, password }: { email: string; password: string }) => {
    // Frontend-only auth simulation.
    // Validation occurs in UI; still keep this lightweight and safe.
    void password

    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 1000))

    const name = email.split('@')[0]?.replace(/\.|_/g, ' ') || 'User'
    const cleanedName = name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' ')

    const nextUser: AuthUser = {
      name: cleanedName || 'FlowMind User',
      email,
      avatarSeed: hashToSeed(email),
    }

    storeAuthUser(nextUser)
    setUser(nextUser)
    setIsLoading(false)
  }, [])

  const signOut = useCallback(() => {
    clearAuthUser()
    setUser(null)
  }, [])

  const value = useMemo<AuthContextValue>(() => ({ user, isLoading, signIn, signOut }), [user, isLoading, signIn, signOut])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

