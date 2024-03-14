import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface AuthState {
	token?: string;
}

const storeApi: StateCreator<AuthState> = set => ({
	token: undefined,
});

export const useAuthStore = create<AuthState>()(
	devtools(persist(storeApi, { name: 'auth-storage' }))
);
