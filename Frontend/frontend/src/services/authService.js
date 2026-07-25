import api from './api'

export async function login({ email, password, rememberMe }) {
  await api.post('/login', { email, password })
  return { email, name: email.split('@')[0], rememberMe }
}

export async function logout() {
  await api.post('/logout')
}
