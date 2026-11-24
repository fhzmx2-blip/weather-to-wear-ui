
import { create } from 'zustand'

interface AuthState {
    accessToken: string
    nickname: string
    setLogin: (accessToken: string, nickname: string) => void
    logout: () => void
}

const useAuthStore = create<AuthState>((set) => ({
    accessToken: '',
    nickname: '',

    setLogin: (accessToken, nickname) =>
        set({ accessToken, nickname }),

    logout: () =>
        set({ accessToken: '', nickname: '' }),
}))

export default useAuthStore
