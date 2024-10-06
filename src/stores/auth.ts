import { defineStore } from 'pinia'

interface AuthState {
  token: string | null;
  user: any | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: localStorage.getItem('token') || null,
    user: null
  }),
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  actions: {
    setAuth(token: string, user: any) {
      this.token = token
      this.user = user
      localStorage.setItem('token', token)
    },
    clearAuth() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
    },
    logout() {
      this.clearAuth()
    }
  }
})