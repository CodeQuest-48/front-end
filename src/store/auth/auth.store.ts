import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AuthStatus, User } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

export interface AuthState {
	token?: string;
	user?: User;
	status: AuthStatus;
	isLoading: boolean;
	error: string | null;

	loginUser: (email: string, password: string) => Promise<void>;
	logoutUser: () => void;
	checkAuthStatus: () => Promise<void>;
}

const storeApi: StateCreator<AuthState> = set => ({
	token: undefined,
	status: 'pending',
	user: undefined,
	isLoading: false,
	error: null,

	loginUser: async (email, password) => {
		try {
			set({ isLoading: true, error: null });

			const { token, ...user } = await AuthService.login(
				email,
				password
			);
			set({ status: 'authorized', token, user });
		} catch (error) {
			set({
				status: 'unauthorized',
				token: undefined,
				user: undefined,
				error: 'Credenciales incorrectas',
			});
			throw new Error('Acceso no autorizado');
		} finally {
			set({ isLoading: false });
		}
	},

	checkAuthStatus: async () => {
		try {
			set({ isLoading: true });
			const { token, ...usuario } = await AuthService.checkStatus();
			set({
				status: 'authorized',
				token,
				user: usuario,
			});
		} catch (error) {
			set({
				status: 'unauthorized',
				token: undefined,
				user: undefined,
			});
			throw new Error('Token expiró o es inválido');
		} finally {
			set({ isLoading: false });
		}
	},

	logoutUser: () => {
		set({
			status: 'unauthorized',
			token: undefined,
			user: undefined,
		});
	},
});

export const useAuthStore = create<AuthState>()(
	devtools(persist(storeApi, { name: 'auth-storage' }))
);
