import { AuthStore } from '@/_types';
import { create } from 'zustand';

const useAuthStore = create<AuthStore>((set) => ({
    token: '',
    expirationDate: '',
    setToken: (newToken: string) => {
        set({ token: newToken });
        localStorage.setItem('token', newToken);
    },
    clearToken: () => {
        set({ token: "" });
        localStorage.setItem('token', "");
    },
    getTokenLocalStorage: () => {
        const token = localStorage.getItem('token')
        return token ? token : "";
    },

    setExpirationDate: (newDate: string) => set({ expirationDate: newDate }),
    logout: () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
}));

export default useAuthStore;
