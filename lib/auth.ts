export type AuthUser = {
  name: string
  email: string
  avatarSeed: string
}

const STORAGE_KEY = 'flowmind.auth'

export function getStoredAuthUser(): AuthUser | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as AuthUser
    if (!parsed?.email || !parsed?.name) return null
    return parsed
  } catch {
    return null
  }
}

export function storeAuthUser(user: AuthUser) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

export function clearAuthUser() {
  window.localStorage.removeItem(STORAGE_KEY)
}

export function hashToSeed(email: string) {
  // Simple deterministic seed (frontend-only)
  let h = 0
  for (let i = 0; i < email.length; i++) h = (h * 31 + email.charCodeAt(i)) >>> 0
  return String(h)
}

