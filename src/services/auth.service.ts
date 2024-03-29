import { AxiosError } from 'axios';
import { api } from '../api/api';

export interface LoginResponse {
	email: string;
	nombre: string;
	token: string;
	rol: string;
}

export class AuthService {
	static login = async (
		email: string,
		password: string
	): Promise<LoginResponse> => {
		try {
			const { data } = await api.post<LoginResponse>('/auth/login', {
				email,
				password,
			});

			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error.response?.data);
				throw new Error(error.response?.data);
			}

			throw new Error('Unable to login');
		}
	};

	static checkStatus = async (): Promise<LoginResponse> => {
		try {
			const { data } = await api.get<LoginResponse>(
				'/auth/check-auth-status'
			);

			return data;
		} catch (error) {
			console.log(error);
			throw new Error('Token expiró o es inválido');
		}
	};
}
